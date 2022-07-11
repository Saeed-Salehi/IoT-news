import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import News from "../components/News";

const Errors = {
  0: "لطفا دوباره تلاش کنید.",
  400: "مشکلی در درخواست شما وجود دارد.",
  401: "لطفا ابتدا وارد شوید",
  402: "دسترسی امکان پذیر نیست",
  403: "شما دسترسی لازم را ندارید",
  404: "اطلاعات پیدا نشد.",
  412: "اطلاعات کافی نیست",
  409: "درخواست تکراری میباشد.",
  500: "مشکلی در سمت سرور رخ داده است. لطفا دوباره تلاش کنید.",
};

export default function Home() {
  const [news, setNews] = useState([]);
  function getNews() {
    axios
      .get("https://cors.koopy.ir/feeds.npr.org/1004/feed.json")
      .then((res) => {
        setNews(res.data.items.slice(0, 5));
      })
      .catch((err) => {
        alert(Errors[err.response.status] ?? Errors[0]);
        throw err;
      });
  }
  useEffect(() => {
    let my_interval = null;
    getNews();
    my_interval = setInterval(() => {
      getNews();
    }, 30000);
    return () => clearInterval(my_interval);
  }, []);
  return (
    <>
      <Header />
      <News news={news} />
    </>
  );
}
