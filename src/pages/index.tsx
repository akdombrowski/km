import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Link from "next/link";

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <a
        href="https://github.com/akdombrowski/km"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-1/3 mx-auto pb-3"
          src={`${router.basePath}/assets/images/kaptcha-me-action-shot.png`}
          alt="kaptcha-me action shot"
        />
      </a>

      <h2 className="text-2xl text-center text-sky-200">
        kaptcha-me bot detection
      </h2>
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

export default Index;
