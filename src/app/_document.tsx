// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.google.com/share?selection.family=Montserrat:ital,wght@0,100..900;1,100..900|Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
