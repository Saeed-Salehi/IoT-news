import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import News from "../components/News";

export default function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://feeds.npr.org/1004/feed.json"
      )
      .then((res) => {
        setNews(res.data.items.slice(0, 5));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <News news={news} />
    </>
  );
}
