import React from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox.jsx'
import Tweet from '../Tweet/Tweet'

export default function Feed() {
  return (
    <div className="feed d-flex flex-column">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox/>
      <div className="tweets">
        <Tweet profileIcon={'https://pbs.twimg.com/profile_images/1566212002162393088/Fsespk4D_400x400.jpg'} userName={'UserArroba'} displayName={'User'} hour={'17h'}/>
        <Tweet profileIcon={'https://pbs.twimg.com/profile_images/1566212002162393088/Fsespk4D_400x400.jpg'} userName={'UserArroba'} displayName={'User'} hour={'17h'}/>
        <Tweet profileIcon={'https://pbs.twimg.com/profile_images/1566212002162393088/Fsespk4D_400x400.jpg'} userName={'UserArroba'} displayName={'User'} hour={'17h'}/>
        <Tweet profileIcon={'https://pbs.twimg.com/profile_images/1566212002162393088/Fsespk4D_400x400.jpg'} userName={'UserArroba'} displayName={'User'} hour={'17h'}/>
        <Tweet profileIcon={'https://pbs.twimg.com/profile_images/1566212002162393088/Fsespk4D_400x400.jpg'} userName={'UserArroba'} displayName={'User'} hour={'17h'}/>
        <Tweet profileIcon={'https://pbs.twimg.com/profile_images/1566212002162393088/Fsespk4D_400x400.jpg'} userName={'UserArroba'} displayName={'User'} hour={'17h'}/>
      </div>
        
    </div>
  )
}
