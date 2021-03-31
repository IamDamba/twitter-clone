import React, { useState } from 'react';
import {db} from "../data/firebase";

import "../Styles/TweetBox/TweetBox.css";

import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const ref = db.collection('posts');

  const sendTweet = e =>{
    e.preventDefault();

    ref.add({
      displayName: 'Elon Musk',
      username: 'elonmusk',
      verif: true,
      text: tweetMessage,
      avt: 'https://mpng.subpng.com/20180728/sac/kisspng-computer-icons-user-symbol-light-client-icon-5b5cfd0bbe3066.907360791532820747779.jpg',
      image: tweetImage
    });

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src="https://image.freepik.com/free-vector/black-men-avatar_7814-346.jpg"/>
          <input
          type="text"
          placeholder="What's happening ?"
          value={tweetMessage}
          onChange={e => setTweetMessage(e.target.value)}/>
        </div>
        <input
        className="tweetBox__imageInput"
        type="text"
        placeholder="Optionnal: Enter an image URL."
        value={tweetImage}
        onChange={e => setTweetImage(e.target.value)}/>
        <Button type='submit' className="tweetBox__btn">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
