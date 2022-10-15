import React from 'react'
import './Tweet.css'

export default function Tweet({ userName, displayName, profileIcon, hour }) {
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa debitis rerum similique accusamus a, veritatis doloremque tempore qui</p>
                </div>
                <div className="w-100 tweet__footer d-flex">
                    <div>
                        <i class="comment interaction-icon fa-regular fa-comment"></i>
                    </div>
                    <div>
                        <i class="retweet interaction-icon fa-solid fa-retweet"></i>
                    </div>
                    <div>
                        <i class="fav interaction-icon fa-regular fa-heart"></i>
                    </div>
                    <div>
                        <i class="share interaction-icon fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
