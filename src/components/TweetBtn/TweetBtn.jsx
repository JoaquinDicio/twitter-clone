import React from 'react'
import './TweetBtn.css'

export default function TweetBtn({onClick,classBtn}) {
  return (
    <button onClick={onClick} className={`tweet-btn ${classBtn}`}>
        Twittear
    </button>
  )
}
