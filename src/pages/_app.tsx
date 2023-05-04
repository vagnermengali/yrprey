import "@/styles/global";
import type { AppProps } from "next/app";
import Provider from "@/context/context";
import {GlobalStyles, ResetCSS} from "@/styles/global";
import 'aos/dist/aos.css';
import "swiper/css/bundle";
import "animate.css/animate.min.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
        <Component {...pageProps} />
        <GlobalStyles/>
        <ResetCSS/>
    </Provider>
  );
}

export default MyApp;