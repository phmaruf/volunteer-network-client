import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import './All.css';


const All = () => {
        
    const [all, setAll] = useState([]);

    const [loggedInUser, setLoggedInUser] =useContext(UserContext);

    useEffect(() => {
        fetch('https://quiet-castle-46164.herokuapp.com/tasks?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setAll(data));
    }, []);

    console.log(all);
    return (
        
        <div className="main-div">
            
            <h3>You have: {all.length} tasks</h3>
            {
                all.map(task => (
                    <div className="task">
                        <li kye={task._id}>Name: {task.name}</li>
                        <li kye={task._id}>Date: {task.date}</li>
                        <li kye={task._id}>Description: {task.description}</li>
                        <li kye={task._id}>Task: {task.name}</li>
                    </div>
                ))
            }
        </div>
    );
};

export default All;