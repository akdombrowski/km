import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p className="text-sky-400">
      <span role="img" aria-label="rocket">
        🚀
      </span>
      Next.js Boilerplate is a starter code for your Next js project by putting
      developer experience first.
      <span role="img" aria-label="zap">
        ⚡️
      </span>
      Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
      VSCode, Netlify, PostCSS, Tailwind CSS.
    </p>
    <h3 className="text-lg font-semibold text-sky-300">
      Next js Boilerplate Features
    </h3>
    <p className="text-sky-400">Developer experience first:</p>
    <ul className="text-sky-400">
      <li>
        <span role="img" aria-label="fire">
          🔥
        </span>
        <a href="https://nextjs.org" rel="nofollow">
          Next.js
        </a>
        for Static Site Generator
      </li>
      <li>
        <span role="img" aria-label="art">
          🎨
        </span>
        Integrate with
        <a href="https://tailwindcss.com" rel="nofollow">
          Tailwind CSS
        </a>
      </li>
      <li>
        <span role="img" aria-label="nail_care">
          💅
        </span>
        PostCSS for processing Tailwind CSS
      </li>
      <li>
        <span role="img" aria-label="tada">
          🎉
        </span>
        Type checking Typescript
      </li>
      <li>
        <span role="img" aria-label="pencil2">
          ✏️
        </span>
        Linter with
        <a href="https://eslint.org" rel="nofollow">
          ESLint
        </a>
      </li>
      <li>
        <span role="img" aria-label="hammer_and_wrench">
          🛠
        </span>
        Code Formatter with
        <a href="https://prettier.io" rel="nofollow">
          Prettier
        </a>
      </li>
      <li>
        <span role="img" aria-label="fox_face">
          🦊
        </span>
        Husky for Git Hooks
      </li>
      <li>
        <span role="img" aria-label="no_entry_sign">
          🚫
        </span>
        Lint-staged for running linters on Git staged files
      </li>
      <li>
        <span role="img" aria-label="no_entry_sign">
          🗂
        </span>
        VSCode configuration: Debug, Settings, Tasks and extension for PostCSS,
        ESLint, Prettier, TypeScript
      </li>
      <li>
        <span role="img" aria-label="robot">
          🤖
        </span>
        SEO metadata, JSON-LD and Open Graph tags with Next SEO
      </li>
      <li>
        <span role="img" aria-label="robot">
          ⚙️
        </span>
        <a
          href="https://www.npmjs.com/package/@next/bundle-analyzer"
          rel="nofollow"
        >
          Bundler Analyzer
        </a>
      </li>
      <li>
        <span role="img" aria-label="rainbow">
          🌈
        </span>
        Include a FREE minimalist theme
      </li>
      <li>
        <span role="img" aria-label="hundred">
          💯
        </span>
        Maximize lighthouse score
      </li>
    </ul>
    <p className="text-sky-400">Built-in feature from Next.js:</p>
    <ul className="text-sky-400">
      <li>
        <span role="img" aria-label="coffee">
          ☕
        </span>
        Minify HTML &amp; CSS
      </li>
      <li>
        <span role="img" aria-label="dash">
          💨
        </span>
        Live reload
      </li>
      <li>
        <span role="img" aria-label="white_check_mark">
          ✅
        </span>
        Cache busting
      </li>
    </ul>
    <h3 className="text-lg font-semibold text-sky-300">
      Our Stater code Philosophy
    </h3>
    <ul className="text-sky-400">
      <li>Minimal code</li>
      <li>SEO-friendly</li>
      <li>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        Production-ready
      </li>
    </ul>
    <p className="text-sky-400">
      Check our GitHub project for more information about
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        Nextjs Boilerplate
      </a>
      . You can also browse our
      <a href="https://creativedesignsguru.com/category/nextjs/">
        Premium NextJS Templates
      </a>
      on our website to support this project.
    </p>
    <div className="flex justify-center">
      <div className="pl-16">
        <p className="text-center text-sm">
          Made with{" "}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </p>
      </div>
      <div>
        <p className="text-center text-sm px-3">-</p>
      </div>
      <div>
        <p className="text-center text-sm">
          <a
            className="text-center text-sm hover:text-green-500"
            href="https://github.com/ixartz/Next-js-Boilerplate"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  </Main>
);

export default About;
