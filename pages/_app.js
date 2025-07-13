// pages/_app.js
import '../styles/styles.css'; // ✅ global CSS import here only

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
