import Script from "next/script";
import { useRouter } from "next/router";
import Header from "../Component/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let { pathname } = router;
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
