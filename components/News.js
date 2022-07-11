import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";

export default function News(props) {
  const { news } = props;
  const [newsItem, setItem] = useState(news[0]);

  useEffect(() => {
    setItem(news[0]);
  }, [news]);
  return (
    <div className="ty-bg-light">
      <div className="page-content">
        <div className="ty-flex ty-flex-wrap">
          <div className="ty-col-5 ty-border-right pr-2">
            {news.map((item, index) => (
              <div
                className="my-3 ty-flex align-items-center ty-border-top ty-border-bottom py-3 cursor-pointer"
                key={index}
                onClick={() => setItem(item)}
              >
                <p className="my-0 fs-14 fw-500 lh-24 pr-1">{item.title}</p>
                <i className="ty-icon ty-icon-arrow-right-outline fs-18" />
              </div>
            ))}
          </div>
          <div className="ty-col-19 pl-3">
            {newsItem && <NewsItem item={newsItem} />}
          </div>
        </div>
      </div>
    </div>
  );
}
