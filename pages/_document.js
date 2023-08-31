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
        </Head>
        <body>
          {/* Your additional content */}
          <p>
            YouTube Thumbnail Downloader
            ▷ Save YT Video Thumbnails
            Get free thumbnail image of any youtube videos in Full HD(1080), HD
            (720), SD, and also in small size. it's currently supported formats:
            YouTube (HD, HQ, 1080p, 4K) videos
          </p>

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
}

export default MyDocument;

