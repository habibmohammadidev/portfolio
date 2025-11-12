import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Habib Mohammadi - Senior Full-Stack Developer Portfolio" />
        <meta property="og:title" content="Habib Mohammadi - Portfolio" />
        <meta property="og:description" content="Senior Full-Stack Developer specializing in JavaScript, React, and Python" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/about/habib-mohammadi.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
