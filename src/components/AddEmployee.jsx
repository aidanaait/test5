import { useState } from "react";
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({onNewEmp=f=>f}) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();
const submitForm = (event)=>{
    event.preventDefault();
    onNewEmp(title,name,city);
    setTitle('');
    setName('');
    setCity('');
    navigate(-1);
}

    return ( <form onSubmit = {submitForm}>
        <input
        type="text"
        value={name}
        placeholder ="Add a new name .."
        onChange = {(event)=>setName(event.target.value)}
        />
        <br></br>
        <input
        type="text"
        value={title}
        placeholder="Add new title"
        onChange = {(event)=>setTitle(event.target.value)}
        />
        <br></br>
        <input
        type="text"
        value={city}
        placeholder="Add new title"
        onChange = {(event)=>setCity(event.target.value)}
        />
        <button>ADD</button>
    </form>

     );
}

export default AddEmployee;
