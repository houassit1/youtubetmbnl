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
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Welcome to YouTube Thumbnail Downloader!
              Are you looking to retrieve high-quality thumbnails from your favorite YouTube videos?
              You're in the right place. Our user-friendly platform allows you to easily download thumbnails in different resolutions, including Full HD (1080p), HD (720p), and more. Here's how it works:
            </p>
            <ol style={{ textAlign: "left" }}>
              <li>Copy the URL of the YouTube video you want to extract a thumbnail from.</li>
              <li>Paste the URL into the designated area on our website.</li>
              <li>Click the "Download" button.</li>
              <li>Choose the desired thumbnail resolution and format.</li>
              <li>Enjoy your downloaded thumbnail!</li>
            </ol>
            <p>
              Whether you're a content creator, a marketer, or simply a YouTube enthusiast, our YouTube Thumbnail Downloader provides you with quick and easy access to the thumbnails you need. Feel free to explore and start downloading your favorite video thumbnails today!
            </p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
