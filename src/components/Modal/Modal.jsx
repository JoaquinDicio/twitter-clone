import { React, useContext } from 'react'
import './Modal.css'
import TweetBtn from '../TweetBtn/TweetBtn'
import { MyContext } from '../../context/MyContextProvider'


export default function Modal() {
  const {toggleModal,setTweetTxt,tweetTxt,imageURL,image,handleTweet,setImageURL,toggleImage}=useContext(MyContext)
  return (
    <div className='modal__container'>
      <div className="modal__content bg-light">
        <div className="modal__header">
          <i onClick={()=>toggleModal()} className=" close-icon fa-solid fa-xmark"></i>
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
