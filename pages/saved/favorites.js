import Link from "next/link";
import { useState, useEffect } from "react";
import FavorItem from "../../components/FavorItem";
import Header from "../../components/Header";

const tabs = [
  { title: "favorites", href: "/saved/favorites" },
  { title: "comments", href: "/saved/comments" },
];

export default function Favorites() {
    const [favs, setFavs] = useState([]);
    useEffect(() => {
      setFavs(JSON.parse(localStorage.getItem("2222")));
    }, []);
  return (
    <>
      <Header />
      <div className="ty-bg-light">
        <div className="page-content">
          <div className="ty-flex pt-4 pb-3 ty-border-bottom">
            {tabs.map((item, index) => (
              <Link href={item.href} key={index}>
                <a className="fs-20 fw-700 px-4">{item.title}</a>
              </Link>
            ))}
          </div>
          <div className="my-4">
            {favs &&
              favs.map((item, index) => (
                <div
                  className="my-3 border-radius-10 ty-border full-width"
                  key={index}
                >
                  <FavorItem FItem={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
