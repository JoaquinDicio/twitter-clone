import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

export default function Widgets() {
  return (
    <div className='widgets d-flex'>
      <div className="d-flex justify-content-center align-items-center widgets__header">
        <div className="d-flex align-items-center search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input className='widgets__search' type="text" placeholder='Search on Twitter'/>
        </div>
      </div>
    </div>
  )
}
