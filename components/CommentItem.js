import { useState } from "react";
import { Button } from "tayeh-react";
import CommentForm from "./CommentForm";

export default function CommentItem(props) {
  const { CItem, newsItem, changeComCounter } = props;
  const [editing, setEditing] = useState(false);
  let changeEditing = () => {
    setEditing(false);
  };
  let deleteHandler = () => {
    let all_comments = JSON.parse(localStorage.getItem("1111"));
    let filtered_comments = all_comments.filter((it) => it.id !== CItem.id);
    localStorage.setItem("1111", JSON.stringify(filtered_comments));
    changeComCounter()
  };
  return (
    <>
      {editing ? (
        <div className="p-3">
          <CommentForm
            newsItem={newsItem}
            changeComCounter={changeComCounter}
            changeEditing={changeEditing}
          />
        </div>
      ) : (
        <div className="ty-flex ty-space-between p-3 lh-24">
          <div>
            <span className="fs-14 fw-500 ty-color-secondary">
              comment for: {CItem.newsTitle}
            </span>
            <p className="fw-700 mb-0">{CItem.content}</p>
          </div>
          <div>
            <div>
              <Button onClick={() => setEditing(true)}>
                <i className="ty-icon ty-icon-edit-outline fs-18" />
              </Button>
            </div>
            <div className="mt-2">
              <Button color="danger" onClick={deleteHandler}>
                <i className="ty-icon ty-icon-trash-outline fs-18" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
