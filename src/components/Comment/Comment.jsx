import { React, useState } from 'react'
import './Comment.css'

export default function Comment({ userName, displayName, txt, image, profileIcon }) {
    //states
    const [isLiked, setIsLiked] = useState(false)
    const [isRetweted, setIsRetweted] = useState(false)
    const [likes, setLikes] = useState(0)
    const [retweets, setRetweets] = useState(0)
    //handle interactions such as like and retweet
    function handleInteraction(type) {
        if (type == 'like') {
            if (!isLiked) {
                setLikes(likes + 1)
                setIsLiked(true)
            } else {
                setLikes(likes - 1)
                setIsLiked(false)
            }
        } else {
            if (!isRetweted) {
                setRetweets(retweets + 1)
                setIsRetweted(true)
            } else {
                setRetweets(retweets - 1)
                setIsRetweted(false)
            }
        }
    }

    return (
        <div className='w-100 comment row justify-content-center'>
            <div className='profile-icon-container'>
                <div className="comment__line"></div>
                <img className='profile-icon' src={`${profileIcon}`} alt={`${userName} profile icon`} />
            </div>
            <div className="col tweet__content comment__content d-flex flex-column">
                <div className="d-flex tweet__header">
                    <h5>{displayName}</h5><p>@{userName}</p>
                </div>
                <div className="tweet__text">
                    <p>{txt}</p>
                </div>
                {image ? (
                    <div style={{ backgroundImage: `url(${image})` }} className="tweet__img" />
                ) : ''}
                <div className="w-100 tweet__footer d-flex">
                    <div className='d-flex align-items-center'>
                        <i className="comment interaction-icon fa-regular fa-comment"></i>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i onClick={() => handleInteraction('retweet')} className={isRetweted ? "retweted retweet interaction-icon fa-solid fa-retweet" : "retweet interaction-icon fa-solid fa-retweet"}></i>
                        {retweets > 0 ? <p className='interaction-indicator'>{retweets}</p> : ''}
                    </div>
                    <div className='d-flex align-items-center'>
                        <i onClick={() => handleInteraction('like')} className={isLiked ? 'liked fav interaction-icon fa-solid fa-heart' : 'fav interaction-icon fa-regular fa-heart'}></i>
                        {likes > 0 ? <p className='interaction-indicator'>{likes}</p> : ''}
                    </div>
                    <div className='d-flex align-items-center'>
                        <i className="share interaction-icon fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
