
import React, {useState} from 'react'
import './html.css'

function Form(){

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage]= useState('');
    return(
        <div className='loginForm'>
            <div id='logo'>
                <span id='lo'>m</span>
                <span id='go'>n</span>
            </div>
            <h1><span id='orange'>Micronaira</span>
            <span id='green'>DAO</span></h1>
             <h1>MemberShip Registration Form</h1>
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </label>
            <label>
                Message:
                <input type="textarea" value={message} onChange={(e)=> setMessage(e.target.value)} />
            </label>

            <input type="button" value="submit" />
        </form>

        </div>
       
    )
}

export default  Form