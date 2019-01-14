import React from "react";

const Post = props => {
  return (
    <div>
      {console.log(props)}
      <div>
        <img src={props.post.thumbnailUrl} />
        <span>{props.post.username}</span>
        <div>
          <img src={props.post.imageUrl} />
        </div>
        <p>{props.post.likes} likes</p>
      </div>
    </div>
  );
};

export default Post;
