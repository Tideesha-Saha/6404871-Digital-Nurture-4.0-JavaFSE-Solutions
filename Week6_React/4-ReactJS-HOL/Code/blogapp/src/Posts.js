// src/Posts.js
import React from "react";
import "./Posts.css";
import { FaUserCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div className="post-container">
        <h2 style={{ padding: "0 3vh" }}>Posts</h2>
        {this.state.posts.map((post) => (
          <div key={post.id} className="post">
            <FaUserCircle size="40" />
            <div className="post-body">
              <h3 style={{ color: "#342d95ff" }}>{post.title}</h3>
              <p>{post.body}</p>
              <div className="buttons">
                <BiLike size={20}/>
                <MdOutlineInsertComment size={20} />
                <FaRegShareSquare size={20}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    console.log("Error info:", info);
  }
}

export default Posts;
