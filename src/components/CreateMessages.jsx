import React, {useState} from "react";
import { createMessage } from "../api-adapter";

const CreateMessages = (props) => {
  const [message, setMessage] = useState("") 
  console.log(message)


  async function handleCreateMessage(event) {
    event.preventDefault();
    // const message = event.target[0].value;
    const token = await createMessage(message);
    // console.log(message, token)
    // localStorage.removeItem("token");
    localStorage.setItem("token", token);

// const post = props.post;
   
//   async function createMessage(e){
//     e.preventDefault()
    
    
//     const token =localStorage.getItem('token')
//     const message = await sendMessage(post.id,token,content)
//    console.log(message)
  }


  return (
//     <div className="box">
//       <form /*onSubmit={CreateMessages}*/>
//         <label htmlFor="message">Message:</label>
//         <input onChange={(event) => setMessage (event.target.value)}
// id="messageForm" type="text" required />
//         <button type="submit" onClick={() => createMessage(message)}
// >Create Message</button>
//       </form>
//     </div>
<div></div>

// all of this was moved over to single post ^^
  );
};

export default CreateMessages;
