import React, {useEffect, useState} from "react";
import {Outlet, NavLink} from "react-router-dom"
import {Searchbar, Posts, Si} from "./";

const NavBar = () => {
  const [postData, setPostData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState({});

  useEffect (() => {
    async function getPostData() {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
      const result = await response.json()
      const posts = result.data.posts
      console.log(posts)
      setPostData(posts)
    }
    getPostData()
  }, []
  )
  
  function filterPostData() {
    if (!searchTerm) {
      return postData;
    } else {
      return postData.filter ((post) => {
        console.log(post)
        return post
      })
    }
    
  }
  return (<>
    <div id="navbar">
      
      <h2 id="navTitle"> Dank Craigslist</h2>
      <div className="nav">
      <NavLink className="navButtons" to="/posts">Posts</NavLink>
      <NavLink className="navButtons" to="/login">Login</NavLink>
      <NavLink className="navButtons" to="/register">Register</NavLink>
      <Searchbar setSearchTerm = {setSearchTerm}/>
      {/* {selectedPost.id ? (
        <PostDetails
        postData = {filterPostData()}
        setPostData={setPostData}/>
      ): (
        <SinglePost postData = {filterPostData()}
        setPostData={setPostData} />
      )} */}
      
      </div>
    </div>
      <Outlet/></>
  );
};

export default NavBar;