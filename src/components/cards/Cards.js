//import React from 'react';
import { useState, useEffect } from 'react';
import "./Cards.css"

const baseUrl = "https://api.github.com/users";

const Cards = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(baseUrl);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
        <div className='card-container'>
            {users.map((user) => { 
                const { id, login, avatar_url, html_url, repos_url } = user;
                return (
                    <div className='minicard' key={id}>
                        <img src={avatar_url} alt="login" />
                        <h4>{login}</h4>
                        <p>{repos_url}</p>
                        <a href={html_url} className='btn'>Show Profile</a>
                        </div>
                )
            })}
            </div>
            </>
    )
}

export default Cards
