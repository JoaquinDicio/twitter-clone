import React, { useState } from 'react'
import './TweetBox.css'
import TweetBtn from '../TweetBtn/TweetBtn.jsx'

export default function TweetBox() {
  const [image,setImage]=useState(false)

  function toggleImage(){
    if(image){
      setImage(false)
    }else{
      setImage(true)
    }
  }

  return (
    <div className='tweetbox'>
      <form className='row' action="">
        <div className='d-flex justify-items-center'>
        <img className='tweetbox__user-img' src='https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg'/>
        <textarea  className='tweetbox__input col-10' type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetbox__actions d-flex justify-content-between">
          <i onClick={()=>toggleImage()} class="tweetbox__img-icon fa-regular fa-image"></i>
          {image? <input placeholder='Enter image URL' className='tweetbox__img-url'></input>:''}
          <TweetBtn classBtn={'tweetbox__tweet-btn'}></TweetBtn>
        </div>
      </form>
    </div>
  )
}
