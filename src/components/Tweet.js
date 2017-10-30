import React from 'react';

const Tweet = (props) => {
  
  return (
    <div className="container">
      <div className="profile row">
        <div className="column sm-8">
          <img src={props.profilePic} />
        </div>
        <div className="top column med-4">
          <div className="row">
          <p>{props.name}</p>
          <p>{props.username}</p>
          <p>{props.postDate}</p>
          </div>
          <p>{props.text}</p>
          <img src={props.media} />
          <i className="fa fa-reply" aria-hidden="true"></i>
          <i className="fa fa-retweet" aria-hidden="true"></i>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Tweet;
