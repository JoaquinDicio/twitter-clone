import React from 'react'
import './Tweet.css'


export default function Tweet({text, userName, displayName, profileIcon, hour, image }) {
    
    return (
        <div className='w-100 tweet row justify-content-center'>
            <div className='profile-icon-container'>
                <img className='profile-icon' src={`${profileIcon}`} alt={`${userName} profile icon`} />
            </div>
            <div className="col tweet__content d-flex flex-column">
                <div className="d-flex tweet__header">
                    <h5>{displayName}</h5><p>@{userName}</p><p>- {hour}</p>
                </div>
                <div className="tweet__text">
                    <p>{text}</p>
                </div>
                {image?(
                    <div style={{backgroundImage:`url(${image})`}} className="tweet__img"/>
                ):''}
                <div className="w-100 tweet__footer d-flex">
                    <div>
                        <i className="comment interaction-icon fa-regular fa-comment"></i>
                    </div>
                    <div>
                        <i className="retweet interaction-icon fa-solid fa-retweet"></i>
                    </div>
                    <div>
                        <i className="fav interaction-icon fa-regular fa-heart"></i>
                    </div>
                    <div>
                        <i className="share interaction-icon fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
