import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import type { AppProps } from "next/app";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { resourceLimits } from "worker_threads";

interface Res {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  id_token: string;
  error: string;
  error_description: string;
}

interface propsWithTokens {
  access: string;
  id: string;
  type: string;
  exp: number;
  sco: string;
  code: string;
  err: object;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const p: propsWithTokens = {
    access: "",
    id: "",
    type: "",
    exp: 0,
    sco: "",
    code: "",
    err: {},
  };
  const query = context.query;
  const authzCode: string | undefined = query
    ? (query.code as string)
    : undefined;

  if (authzCode) {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    myHeaders.append(
      "Authorization",
      "Basic " + process.env.PING_BASIC_AUTH_HEADER
    );

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("code", authzCode as string);
    urlencoded.append("redirect_uri", "http://localhost:3000/myaccount");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response: Response = await fetch(
        "https://auth.pingone.com/4e5491d5-74b6-4953-a3d1-c29f76f34d93/as/token",
        requestOptions
      );
      const res: Res = await response.json();
      if (!res.access_token) {
        p.err = { error: res.error, description: res.error_description };
      }
      p.access = res.access_token || "";
      p.id = res.id_token || "";
      p.type = res.token_type || "";
      p.exp = res.expires_in || 0;
      p.sco = res.scope || "";
      p.code = authzCode;

      // context.res.setHeader(
      //   "Cache-Control",
      //   "public, s-maxage=1, stale-while-revalidate=2"
      // );
    } catch (e) {
      p.err = e as object;
      console.log("");
      console.log("failed to get token");
      console.log("e");
      console.log(e);
      console.log("");
    }
  }

  return {
    props: p, // will be passed to the page component as props
  };
};

const MyAccount = (
  pageProps: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <Main meta={<Meta title="kaptcha-me" description="Gotta kaptcha me all" />}>
      <h2 className="text-2xl text-center text-sky-200 pb-5">
        kaptcha-me bot detection
      </h2>
      <h4 className="text-center text-pink-500">My Account</h4>
      <div className="flex justify-center w-100">
        <pre className="text-md break-all whitespace-pre-wrap text-slate-400 py-5 px-5 mt-0 bg-slate-900 w-full">
          {JSON.stringify(pageProps, null, 2)}
        </pre>
      </div>
      <p className="text-md text-sky-400">A playground for exploring:</p>
      <ul className="text-xxxs text-sky-500">
        <li>login</li>
        <li>registration</li>
        <li>bot detection/protection</li>
        <li>FIDO2 (coming)</li>
        <li>WebAuthn (coming)</li>
        <li>Passkeys (coming)</li>
      </ul>
    </Main>
  );
};

export default MyAccount;
