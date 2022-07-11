export default function CommentItem(props) {
  const { CItem } = props;
  return (
    <div className="p-3 lh-24">
      <span className="fs-14 fw-500 ty-color-secondary">
        comment for: {CItem.newsTitle}
      </span>
      <p className="fw-700 mb-0">{CItem.content}</p>
    </div>
  );
}
