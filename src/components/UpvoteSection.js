import React from "react";

export default function UpvoteSection({
  articleName,
  upvotes,
  setArticleInfo,
}) {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div>
      <button onClick={() => upvoteArticle()}>Add upvote</button>
      <p>This post has been upvoted {upvotes} times</p>
    </div>
  );
}
