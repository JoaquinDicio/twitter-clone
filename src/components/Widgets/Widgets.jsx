import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

export default function Widgets() {
  return (
    <div className='widgets flex-column d-flex'>
      <div className="d-flex justify-content-center align-items-center widgets__header">
        <div className="d-flex align-items-center search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className='widgets__search' type="text" placeholder='Search on Twitter'/>
        </div>
      </div>
      <div className="widgets__twitter">
        <TwitterTimelineEmbed
        screenName='joacodicio'
        tweetLimit={3}
        noFooter={true}
        noHeader={true}
        placeholder={'Loading tweets..'}
        />
      </div>
    </div>
  )
}
