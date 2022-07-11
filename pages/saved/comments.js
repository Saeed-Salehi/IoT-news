import Link from "next/link";
import { useEffect, useState } from "react";
import CommentItem from "../../components/CommentItem";
import Header from "../../components/Header";

const tabs = [
  { title: "favorites", href: "/saved/favorites" },
  { title: "comments", href: "/saved/comments" },
];

export default function Comments() {
  const [all_comments, setComments] = useState([])
  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("1111")));
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
          <div className="my-4 ty-col-16 mx-auto">
            {all_comments &&
              all_comments.map((item, index) => (
                <div
                  className="my-3 border-radius-15 ty-border full-width"
                  key={index}
                >
                  <CommentItem CItem={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
