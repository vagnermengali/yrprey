import Head from "next/head";
import logo from "@/assets/image/logos/logo.svg";
import { ISeo } from "@/interfaces/ISeo/ISeo";

const SEO = ({ title, description }: ISeo) => {
  const logoUrl = logo.src;

  return (
    <Head>
      <title>{`${title}`}</title>
      <link rel="shortcut icon" href={logoUrl} type="image/x-icon" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default SEO;