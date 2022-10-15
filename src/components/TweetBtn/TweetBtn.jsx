import React from 'react'
import './TweetBtn.css'

export default function TweetBtn({classBtn}) {
  return (
    <button className={`tweet-btn ${classBtn}`}>
        Twittear
    </button>
  )
}
