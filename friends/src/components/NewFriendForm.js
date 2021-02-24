import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Styling
import styled from 'styled-components';

const FormContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;

    h3{
        text-align: center;
    }
    .form-container{
        margin: 1%;
    }
    .form{
        display: flex;
        flex-direction: column;
    }
    label{
        font-size: 1.2rem;
        padding: 2%;
        
    }
    input{
        width: 250px;
        margin: 0% 4%;
        padding: 1%;
    }
    
`

const NewFriendForm = () => {
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""
    });
    
    const handleChange = (e) => {
        setNewFriend({
                ...newFriend,
                [e.target.name]: e.target.value,
                [e.target.age]: e.target.value,
                [e.target.email] : e.target.email

        })
    }

    const handleAdd = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .post("/friends", newFriend)
            .then((res) => {
                console.log("new list",res.data)
                setNewFriend(res.data)
            })
            .catch((err) => {
                console.log("error:", err);
            });
            e.target.reset()
    }





    return (
        <FormContainer>
      <div className="form-container">
      <h3>Add A Friend</h3>
      <div className="form"> 
        <form onSubmit={handleAdd}>
          <label htmlFor="name">
            Name:
          
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newFriend.name || ""}
              onChange={handleChange}
              id="name"
            />
          </label>
          <label htmlFor="age">
            Age:
          
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={newFriend.age || ""}
              onChange={handleChange}
              id="age"
            />
          </label>
          <label htmlFor="email">
            Email:
          
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newFriend.email || ""}
              onChange={handleChange}
              id="email"
            />
          </label>
          <button type="submit">Add New Friend</button>
        </form>
      </div>
      </div>
    </FormContainer>
  );
};


export default NewFriendForm
