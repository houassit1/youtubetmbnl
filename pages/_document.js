import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          <style>
            {`
              h2.nav-title {
                color: #555555;
                font-size: 21px;
                width: 236px;
                height: 21px;
                margin: 0;
                padding: 0;
                position: absolute;
                top: 0;
                left: 0;
              }
            `}
          </style>
        </Head>
        <body>
          <h2 className="nav-title">Download Youtube Thumbnail</h2>

          <Main />
          <NextScript />

          <div style={{
            margin: "2rem auto",
            textAlign: "center",
            border: "2px dashed #999",
            padding: "1rem",
            maxWidth: "600px",
          }}>
            <p style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}>
              <span style={{ color: "#FF0000" }}>YouTube Thumbnail Downloader</span>
            </p>
            <p>
              <span style={{ fontSize: "1.2rem" }}>
                ▷ Save YT Video Thumbnails
              </span>
            </p>
            <p>
              Get free thumbnail image of any YouTube videos in Full HD(1080), HD
              (720), SD, and also in small size. It's currently supported formats:
              YouTube (HD, HQ, 1080p, 4K) videos
            </p>
          </div>
        </body>
      </Html>
    );
  }