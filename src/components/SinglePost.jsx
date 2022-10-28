import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Messages } from "./";
import { createMessage } from "../api-adapter";

const SinglePost = (props) => {
  const [message, setMessage] = useState("") 
  console.log(message)
  const post = props.post;

  return (
    <div id="post-Details">
      {post.title}
      {post.description}
      {post.price}
      {post.author.username}
      {post.location}
      <Link to={`/post/details/${post._id}`}>
        <button>Post details</button>
      </Link>
      <Messages postId={post._id} />
    
    {/* below is the create message form that shows on every post, sorry! */}
    <div className="box">
      <form /*onSubmit={CreateMessages}*/>
        <label htmlFor="message">Message: </label>
        <label htmlFor="message"></label>
        <input onChange={(event) => setMessage (event.target.value)}
id="messageForm" type="text" required />
        <button type="submit" onClick={() => createMessage(post._id, message)}
>Create Message</button>
      </form>
    </div>
    </div>
  );
};

export default SinglePost;
