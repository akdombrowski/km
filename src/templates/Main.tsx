import Link from "next/link";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

import { UserCircleIcon } from "@heroicons/react/24/solid";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto px-10">
      <header className="border-b border-gray-300">
        <div className="pb-5 pt-1 flex">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-400">
              {AppConfig.title}
            </h1>
            <h2 className="text-xl text-gray-500">{AppConfig.description}</h2>
          </div>
          <div className="flex flex-wrap columns-1 items-center justify-center justify-items-center">
            <div className="w-full flex justify-center">
              <Link
                href="/login"
                className="text-cyan-100 hover:text-green-500"
              >
                <div className="w-full flex justify-center">
                  <UserCircleIcon
                    className="h-12 w-12 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </div>
                Login/Register
              </Link>
            </div>
          </div>
        </div>
        <nav className="border-t border-gray-700">
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-orange-300 hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="border-none text-orange-300 hover:text-green-500"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-orange-300 hover:text-green-500"
                href="https://github.com/akdombrowski/km"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-orange-300 hover:text-green-500"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content p-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  </div>
);

export { Main };
