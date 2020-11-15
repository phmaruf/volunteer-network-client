import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../App';
import logo from '../../pics/logos/Group 1329.png';
import './Register.css'
import { useHistory, useParams } from 'react-router-dom';
import { tasks } from '../Home/Card/Card';
import { useEffect } from 'react';
import { useState } from 'react';

           

const Register = () => {
const [reEvent, setReEvent] = useState({})    
    const{id} = useParams();

    useEffect(() => {
        
        const filterEvent = tasks.find(i=>parseInt(i.id))
        setReEvent(filterEvent)
    }, [])

    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    console.log(watch("example")); // watch input value by passing the name of it
    const History = useHistory();
  
    const onSubmit = (data) =>{
        const newTask = {...loggedInUser, ...data};
        fetch('https://quiet-castle-46164.herokuapp.com/addTask', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        History.push('/all')  
        })

    }

    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <a class="navbar-brand mb-5" href="#">
                <img style={{height: '50px'}} src={logo} alt=""/>
            </a>
        </div>
        <div className="register">
            <h3 className="mt-5"> <strong> Register as a Volunteer</strong> </h3>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name" defaultValue={loggedInUser.name} placeholder="Full Name" ref={register({ required: true })} />
                {errors.name && <span className="error">Name is required</span>}
                
                <input name="email" defaultValue={loggedInUser.email} placeholder="User Name or Email" ref={register({ required: true })} />
                {errors.email && <span className="error">Username or Email is required</span>}
                
                <input name="date" placeholder="Date" ref={register({ required: true })} />
                {errors.date && <span className="error">Date is required</span>}
                
                <input name="description" placeholder="Description" ref={register({ required: true })} />
                {errors.description && <span className="error">Description is required</span>}
                
                <input name="task" value={reEvent.name}  placeholder="Task" ref={register({ required: true })} />
                {errors.task && <span className="error">Task Name is required</span>}
            
            <button type="submit" className="input-btn" >Register</button>
           </form>
        </div> 
      </div>     
      
      
    );
};

export default Register;