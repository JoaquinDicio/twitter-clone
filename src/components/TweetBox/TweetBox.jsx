import React from 'react'
import './TweetBox.css'

export default function TweetBox() {
  return (
    <div className='tweetbox'>
      <form className='row' action="">
        <div className='d-flex justify-items-center'>
        <img className='tweetbox__user-img' src='https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg'/>
        <input className='tweetbox__input col-10' type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetbox__actions">

        </div>
      </form>
    </div>
  )
}
