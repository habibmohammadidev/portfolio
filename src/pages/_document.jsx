import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Habib Mohammadi - Senior iOS Developer with 10+ years experience in Swift, UIKit, SwiftUI. Expert in mobile app development, AI/ML integration, and iOS architecture." />
        <meta name="keywords" content="iOS Developer, Swift Developer, Mobile App Development, SwiftUI, UIKit, iOS Engineer, Berlin, Habib Mohammadi" />
        <meta name="author" content="Habib Mohammadi" />
        <meta property="og:title" content="Habib Mohammadi - Senior iOS Developer Portfolio" />
        <meta property="og:description" content="Senior iOS Developer specializing in Swift, SwiftUI, and mobile app architecture. 10+ years building innovative iOS applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://habibmohammadidev.github.io/portfolio/" />
        <meta property="og:image" content="https://habibmohammadidev.github.io/portfolio/images/about/personal-photo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Habib Mohammadi - Senior iOS Developer" />
        <meta name="twitter:description" content="Senior iOS Developer with 10+ years experience in Swift, UIKit, SwiftUI, and mobile app development." />
        <meta name="twitter:image" content="https://habibmohammadidev.github.io/portfolio/images/about/personal-photo.jpg" />
        <link rel="canonical" href="https://habibmohammadidev.github.io/portfolio/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
