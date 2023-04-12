import { type AppType } from "next/dist/shared/lib/utils";
import { Outfit } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"], weight: "500" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
