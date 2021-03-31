import React from 'react';
import "../Styles/Post/Post.css";

import { Avatar } from '@material-ui/core';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({ displayName, username, verif, text, image, avt}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avt}/>
      </div>
      <div className="post__body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verif ? <VerifiedUserIcon className="post__badge"/> : null} @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            {text}
          </div>
        </div>
        <img src={image} alt={image}/>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Post;
