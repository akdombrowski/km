import "../styles/global.css";

import type { AppProps } from "next/app";
import { Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={tiltwarp.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
