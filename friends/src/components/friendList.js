import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Component
import Friend from "./friend";
import NewFriendForm from './NewFriendForm'


const FriendList = () => {
    const [friends, setFriends] = useState ([])

    const getFriends = () => {
        axiosWithAuth()
        .get("/friends")
        .then((res) => {
            console.log('friends list', res.data)
            setFriends(res.data)
    
        })
        .catch((err) => {
            console.log("Error when getting friends", err)
        })
    }

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div>
            <NewFriendForm />
            <h1>Friends List</h1>
            <div className="friend-container">  
                {friends.map((friend) => {
            return <Friend friend={friend} key={friend.id}/>
                })}
            </div>
        </div>
    )
}


export default FriendList
