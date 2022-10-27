import { React, useState } from 'react'
import './Modal.css'
import TweetBtn from '../TweetBtn/TweetBtn'
import { setDoc, doc } from 'firebase/firestore'
import db from '../../services/API'
import { nanoid } from 'nanoid'


export default function Modal() {
  //states
  const [image, setImage] = useState(false)
  const [imageURL, setImageURL] = useState('')
  const [tweetTxt, setTweetTxt] = useState('')

  //toggle the option to add an image url
  function toggleImage() {
    if (image) {
      setImage(false)
    } else {
      setImage(true)
    }
  }

  //tweet function: inserts a new tweet
  async function handleTweet(e, text) {
    e.preventDefault()
    if (tweetTxt != '') {
      await setDoc(doc(db, "tweets", nanoid(3)), {
        displayname: "dichuu",
        image: imageURL,
        hour: new Date(),
        profileicon: 'https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg',
        text: tweetTxt,
        username: 'joacodicio',
      })
      setTweetTxt('')
      setImageURL('')
    }
  }

  return (
    <div className='modal__container'>
      <div className="modal__content bg-light">
        <div className="modal__header">
          <i class=" close-icon fa-solid fa-xmark"></i>
        </div>
        <div className="modal__form row">
          <div className="d-flex align-items-start justify-content-end col-2">
            <img className='modal__user-img' src="https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg" alt="my profile" />
          </div>
          <div className="col-10">
            <textarea onChange={(e)=>setTweetTxt(e.target.value)} className='modal__input' placeholder={"What's happening?"} value={tweetTxt} rows="5"></textarea>
          </div>
          <div className="d-flex align-items-center justify-content-end modal__actions">
            <div className='d-flex justify-content-between'>
              <i onClick={() => toggleImage()} className="tweetbox__img-icon fa-regular fa-image"></i>
              {image ? <input onChange={(e) => setImageURL(e.target.value)} value={imageURL} placeholder='Enter image URL' className='tweetbox__img-url'></input> : ''}
              <TweetBtn onClick={handleTweet} classBtn={'tweetbox__tweet-btn'}></TweetBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
