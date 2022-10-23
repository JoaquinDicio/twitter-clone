import React, { useEffect, useState } from 'react'
import './TweetBox.css'
import TweetBtn from '../TweetBtn/TweetBtn.jsx'
import { setDoc,doc } from 'firebase/firestore'
import db from '../../services/API'
import { nanoid } from 'nanoid' 

export default function TweetBox({onTweet}) {
  //states
  const [image, setImage] = useState(false)
  const[imageURL,setImageURL]=useState('')
  const [tweetTxt,setTweetTxt]=useState('')

  //tweet function: inserts a new tweet
  async function handleTweet(e,text){
    e.preventDefault()
    await setDoc(doc(db,"tweets",nanoid(3)),{
      displayname:"dichuu",
      image:imageURL,
      profileicon:'https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg',
      text:tweetTxt,
      username:'joacodicio',
    })
  }
  //toggle the option to add an image url
  function toggleImage() {
    if (image) {
      setImage(false)
    } else {
      setImage(true)
    }
  }

  return (
    <div className='tweetbox'>
      <form className='tweetbox__form w-100 row' action="">
        <div className='d-flex justify-items-center'>
          <img className='tweetbox__user-img' src='https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg' />
          <textarea value={tweetTxt} onChange={(e)=>setTweetTxt(e.target.value)} className='tweetbox__input col-10' type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetbox__actions d-flex justify-content-between">
          <i onClick={() => toggleImage()} className="tweetbox__img-icon fa-regular fa-image"></i>
          {image ? <input onChange={(e)=>setImageURL(e.target.value)} value={imageURL} placeholder='Enter image URL' className='tweetbox__img-url'></input> : ''}
          <TweetBtn onClick={handleTweet} classBtn={'tweetbox__tweet-btn'}></TweetBtn>
        </div>
      </form>
    </div>
  )
}
