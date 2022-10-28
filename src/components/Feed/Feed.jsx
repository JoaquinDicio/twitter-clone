import { React, useState, useEffect, useContext } from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox.jsx'
import Tweet from '../Tweet/Tweet'
import db from '../../services/API'
import Modal from '../Modal/Modal'
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore'
import { MyContext } from '../../context/MyContextProvider'

export default function Feed() {
  //states
  let [tweets, setTweets] = useState()
  const {showModal}=useContext(MyContext)

  //useffect
  useEffect(()=>{
    onSnapshot(query(collection(db,'tweets'),orderBy('hour','desc')),(docs)=>{
      const arr=[]
      docs.forEach((doc)=>
      arr.push({...doc.data(),id:doc.id}))
      setTweets(arr)
    })
  },[])

  return (
    <div className="feed d-flex flex-column">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox/>
      <div className="tweets">
        {tweets?
        tweets.map((tweet) =>
        <Tweet text={tweet.text} key={tweet.id} profileIcon={tweet.profileicon} userName={tweet.username} displayName={tweet.displayname} image={tweet.image} hour={tweet.hour} />
      ): 'Loading...'} 
      </div>
      {
        showModal?<Modal/>:''
      } 
      
    </div>
  )
}
