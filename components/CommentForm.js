import axios from "axios";
import { useState } from "react";
import { Button, Input } from "tayeh-react";
import { v4 as uuid } from "uuid";

export default function CommentForm(props) {
  const [comTex, setText] = useState("");
  let formHandler = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    let comments = JSON.parse(localStorage.getItem("1111"));
    let new_comments = [
      ...comments,
      {
        id: small_id,
        content: comTex,
        newsTitle: props.newsItem.title,
        newsId: props.newsItem.id,
      },
    ];
    localStorage.setItem("1111", JSON.stringify(new_comments));
    props.changeComCounter();
    axios
      .post("example.com", {})
      .then(() => {})
      .catch(() => alert("It wasn't sent anywhere, but we saved it for you!"));
  };

  return (
    <div className="ty-col-12 mx-auto">
      <form onSubmit={formHandler}>
        <Input
          tag="textarea"
          placeholder="Write your comment dude..."
          radius={8}
          clear
          required
          rows={7}
          value={comTex}
          onChange={(e) => setText(e.target.value)}
          inputClass="ty-bg-border fs-16"
          tyClass="full-width"
        />
        <Button tyClass={"mt-2 fw-700 full-width py-2"} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
