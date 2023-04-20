import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

import { LockClosedIcon } from "@heroicons/react/20/solid";
import { GetServerSideProps } from "next";

import { Buffer } from "node:buffer";
import { SyntheticEvent, useState } from "react";
import { BotDetection } from "../components";

interface P {
  challenge: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let crypto;
  const p: P = { challenge: "" };
  try {
    const { randomFill } = await import("node:crypto");
    const uint8arr = new Uint8Array(32);
    await randomFill(uint8arr, (err, uint8arr) => {
      if (err) {
        throw err;
      }
      p.challenge = JSON.stringify(uint8arr);
      console.log(uint8arr.toString());
      console.log(JSON.stringify(uint8arr));
    });
  } catch (e) {
    console.error("crypto module not available");
    console.error(e);
  }
  return { props: p };
};

const LoginBotDetection = (pageProps: P) => {
  const router = useRouter();
  const [tabSelected, setTabSelected] = useState("botDetection");

  const webuathnLogin = () => {
    if (
      !PublicKeyCredential.isConditionalMediationAvailable ||
      !PublicKeyCredential.isConditionalMediationAvailable()
    ) {
      return;
    }

    navigator.credentials.get({
      mediation: "conditional",
      publicKey: {
        challenge: pageProps.challenge,
        // `allowCredentials` can be used as a filter on top of discoverable credentials.
      },
    });
  };

  const getExperienceComponent = () => {
    if (tabSelected === "botDetection") {
      return <BotDetection />;
    }
  }
  

  const handleTabSelectedChange = (event: SyntheticEvent) => {
    setTabSelected(event.currentTarget.id);
  };

  const changeExperience = (event: SyntheticEvent) => {};

  return (
    <Main
      meta={
        <Meta
          title="Choose your secure authenication epxeirience"
          description="kaptcha-me."
        />
      }
    >
      <div className="flex min-h-full w-full items-center justify-center px-1 pt-5 pb-12 sm:px-2 lg:px-5">
        <div className="w-full max-w-lg space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto"
              src={`${router.basePath}/assets/images/anthony-black-rays.png`}
              alt="Your Company"
            />
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-400">
              Login or Register
            </h2>
          </div>
          <ul className="flex border-b border-gray-200 text-center">
            <li className="flex-1">
              <a
                id="botDetection"
                className="relative block border-t border-l border-r border-gray-200 bg-white px-0 py-3 text-lg font-medium"
                href="https://auth.pingone.com/4e5491d5-74b6-4953-a3d1-c29f76f34d93/as/authorize?response_type=code&client_id=89de4bc4-6d8e-483d-be89-db9003109076&scope=openid%20profile%20p1%3Aread%3Auser&nonce=54321&redirect_uri=http://localhost:3000/myaccount"
              >
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-white"></span>
                <span className="text-red-700 p-0 m-0 h-full">
                  Bot Detection
                </span>
              </a>
            </li>

            <li className="flex-1">
              <a
                id="fido2WebAuthn"
                className="block p-4 text-sm font-medium text-gray-500"
                href=""
              >
                FIDO2/WebAuthn
              </a>
            </li>

            <li className="flex-1">
              <a
                id="passkeys"
                className="block p-4 text-sm font-medium text-gray-500"
                href=""
              >
                Passkeys
              </a>
            </li>
          </ul>

          
          <div id="experienceComponent">
            {getExperienceComponent()}
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email webauthn"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-3 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password webauthn"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-3 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default LoginBotDetection;
