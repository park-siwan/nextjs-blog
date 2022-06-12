import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <header>
        <h1>GNB 헤더</h1>
      </header> */}
      <Component {...pageProps} />
      {/* <footer>
        <h2>푸터</h2>
      </footer> */}
    </div>
  );
}
