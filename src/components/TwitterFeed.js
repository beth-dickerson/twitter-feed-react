import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {
  let tweetData = props.data.map((twitter) => {
    return(
      <Tweet
        key={twitter.id_str}
        id={twitter.id_str}
        profilePic={twitter.user.profile_image_url}
        name={twitter.user.name}
        username={twitter.user.screen_name}
        postDate={twitter.timestamp_ms}
        text={twitter.text}
        favorited={twitter.favorited}
        retweeted={twitter.retweeted}
        media={twitter.entities.media_url}

      />
    )
  })
  return (
    <div>
      {tweetData}
    </div>
  )
}

export default TwitterFeed;
