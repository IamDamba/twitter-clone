import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import '../Styles/Widgets/Widgets.css';

import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className='widgets__searchIcon'/>
          <input type="text" placeholder="Search Twitter"/>
        </div>
        <div className="widgets__widgetContainer">
          <h2>What's happening !!</h2>
          <TwitterTweetEmbed tweetId={'933354946111705097'}/>
          <TwitterTimelineEmbed sourceType="profile" screenName="saurabhnemade" options={{height: 400}}/>
          <TwitterShareButton url={'https://facebook.com/saurabhnemade'} options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }} />
        </div>
      </div>
    </div>
  )
}

export default Widgets
