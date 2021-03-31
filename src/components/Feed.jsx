import React, { useState, useEffect } from 'react';
import {db} from "../data/firebase";

import '../Styles/Feed/Feed.css';

import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  
  const ref = db.collection('posts');

  useEffect(()=>{
    ref.onSnapshot((snap) => {
      const data = snap.docs.map(doc=>({...doc.data()}))
      setPosts(data);
    })
  }, [])

  return (
    <div className="feed">
      <header className="feed__header">
        <h2>Home</h2>
      </header>
      <TweetBox/>
      {posts.map((post, index) => (
        {},
        <Post
        key={index}
        displayName={post.displayName}
        username={post.username}
        verif={post.verif}
        text={post.text}
        avt={post.avt}
        image={post.image}/>
      ))}
    </div>      
  )
}

export default Feed;
