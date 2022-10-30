import React, { useState } from 'react'
import { setDoc, doc } from 'firebase/firestore'
import db from '../services/API'
import { nanoid } from 'nanoid'
export const MyContext = React.createContext({})

export default function MyContextProvider({ children }) {
    //states
    const [showModal, setShowModal] = useState(false)
    const [image, setImage] = useState(false)
    const [imageURL, setImageURL] = useState('')
    const [tweetTxt, setTweetTxt] = useState('')
    //tweet function: inserts a new tweet
    async function handleTweet(e, text) {
        e.preventDefault()
        if (tweetTxt != '') {
            await setDoc(doc(db, "tweets", nanoid(3)), {
                displayname: "dichuu",
                image: imageURL,
                hour: new Date(),
                profileicon: 'https://pbs.twimg.com/profile_images/1364057247186362369/acSYBHZI_400x400.jpg',
                text: tweetTxt,
                username: 'joacodicio',
            })
            setTweetTxt('')
            setImageURL('')
        }
    }
    //toggle the option to add an image url
    function toggleImage() {
        if (image) {
            setImage(false)
        } else {
            setImage(true)
        }
    }
    //function to display the modal
    function toggleModal(type) {
        if (showModal) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    return (
        <MyContext.Provider value={{ toggleModal, showModal, setShowModal, toggleImage, handleTweet, image, setImage, tweetTxt, setTweetTxt }}>
            {children}
        </MyContext.Provider>
    )
}
