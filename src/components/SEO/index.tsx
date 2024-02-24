import Head from "next/head";
import logo from "@/assets/image/logos/logo.svg";
import banner from "@/assets/image/backgrounds/background-banner.png";
import { ISeo } from "@/interfaces/ISeo/ISeo";
import { useEffect } from "react";

const SEO = ({ title, description }: ISeo) => {
    const logoUrl = logo.src;
    const bannerUrl = banner.src;
    useEffect(() => {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.5/dist/js/bootstrap.bundle.min.js';
        bootstrapScript.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
        bootstrapScript.crossOrigin = 'anonymous';
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);

        return () => {
            document.body.removeChild(jqueryScript);
            document.body.removeChild(bootstrapScript);
        };
    }, []);

    return (
        <Head>
            <meta name="author" content="Vagner Mengali" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href={logoUrl} title="YRPrey" />
            <link rel="icon" type="image/svg+xml" href={logoUrl} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{`${title}`}</title>
            <link rel="shortcut icon" href={logoUrl} type="image/x-icon" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="YRPrey" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="http://yrprey.com/" />
            <meta property="og:image:alt" content="YYRPrey is a Brazilian site for security and vulnerability testing." />
            <meta property="og:image" content="/banner.svg" />
            <meta name="twitter:title" content="YRPrey" />
            <meta name="twitter:site" content="@vagnermengali" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={bannerUrl} />
            <meta name="twitter:description" content="YYRPrey is a Brazilian site for security and vulnerability testing." />
            <meta property="al:ios:app_name" content="YRPrey" />
            <meta property="al:ios:url" content="http://yrprey.com/" />
            <meta property="al:android:app_name" content="YRPrey" />
            <meta property="al:android:url" content="http://yrprey.com/" />
            <link rel="canonical" href="http://yrprey.com/" />
        </Head>
    );
};

export default SEO;