// react
import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
// @emotion
import createEmotionServer from "@emotion/server/create-instance";
// utility
import createEmotionCache from "utility/createEmotionCache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="canonical" href="https://drakarolinemaria.com.br/" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />

          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="author" content="Dra. Karoline Maria" />

          <meta
            property="og:title"
            content="Dra. Karoline Maria - Dentista e Especialista"
          />
          <meta
            property="og:description"
            content="Consultório odontológico especializado em saúde bucal, estética e harmonização facial."
          />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta
            property="og:url"
            content="https://www.drakarolinemaria.com.br"
          />
          <meta property="og:type" content="website" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Clínica Dra. Karoline",
                description:
                  "Consultório odontológico especializado em saúde bucal, estética e harmonização facial.",
                url: "https://www.drakarolinemaria.com.br/",
                logo: "https://www.drakarolinemaria.com.br/home/logo_karol.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+55 11958169432",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: "Portuguese",
                },
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  /* eslint-disable */
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });
  /* eslint-enable */

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
