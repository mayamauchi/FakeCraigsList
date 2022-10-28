import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Messages } from "./";
import { createMessage } from "../api-adapter";

const SinglePost = (props) => {
  const [message, setMessage] = useState("") 
  console.log(message)
  const post = props.post;

  return (
    <div className="single-post-box">
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>{post.price}</div>
      <div>{post.author.username}</div>
      <div>{post.location}</div>
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
