import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import '../assets/css/login.css';
export default function AddLogin(props) {
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const peticionPost = (url,usuario)=>{
        axios.post(url,usuario).then(response=>{
            console.log(response)
        })
    }
    const handleSubmit = (url)=>{
        const usuario={
            username:username,
            password:password
        }
        peticionPost(url,usuario)
    }
    const handleclick = ()=>{
        alert('Se añadió con éxito');
        axios.get('http://localhost:18080/listDuenios').then(response=>props.onDueniosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div id="loginCon">
            <div className="login">
                <h2>Añadir una nuevo Dueño</h2>
                <div className="inputs">
                    <input className='input-group-text texto' id='username' type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
                    <input className='input-group-text texto' id='password' type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className='but'><button className='btnl btn-dark' onClick={()=>{
                    if(username!=='' && password!==''){
                        handleSubmit('http://localhost:18080/usuario/{username}');
                        handleclick();
                        document.getElementById('username').value=''
                        document.getElementById('password').value=''
                    }
                    else alert('Llene todos los campos')}}
                > Agregar</button>
                </div>
            </div>
        </div>
    );
}
