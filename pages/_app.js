import "../styles/globals.scss";
import "tayeh-react/lib/style.css";
import "tayeh-react/lib/components.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const comments = localStorage.getItem("1111");
    const favorites = localStorage.getItem("2222");
    if (typeof comments !== "string") {
      localStorage.setItem("1111", JSON.stringify([]));
    }
    if (typeof favorites !== "string") {
      localStorage.setItem("2222", JSON.stringify([]));
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
