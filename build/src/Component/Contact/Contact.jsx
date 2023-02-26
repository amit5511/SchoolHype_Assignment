import './Contact_Form.css'

import React, { useState } from 'react'
import {toast } from 'react-toastify';
import axios from 'axios'
const Contact = () => {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const notify = () => toast.success('Thankyou,We will connect you as soon as possible.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const errormessge = () => toast.error('Error !!! Try Again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        setDisabled(true);
        //we not use redux here because a single api call is require and
        //not need of data transfering to many component like child to parent
        const msg = {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
        }


        //api call
        const { data } = await axios.post('http://localhost:8000/api/v1/message', msg);
        if (data.success) {
            setemail('');
            setmessage('');
            setname('');
            setphone('');
            notify();
        } else {
            errormessge();
        }
        setDisabled(false);
    }


    return <>
        <div className='contact_container'>
            <div className='contact_container_left'>
                <div><i class="fa fa-phone" aria-hidden="true"></i> Call</div>
                <div><i class="fa fa-map-marker"></i> Location</div>
                <div><i class="fa fa-envelope" aria-hidden="true"></i>  Mails</div>
            </div>
            <div className='contact_form'>
                <p>Contact Form</p>
                <p>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>
                <form onSubmit={(e) => submitHandler(e)}>
                    <input required minLength='5' maxLength='20' type='text' onChange={(e) => setname(e.target.value)} value={name} placeholder='Name*' /><br />
                    <input required type='email' minLength='8' onChange={(e) => setemail(e.target.value)} value={email} placeholder='Email*' /><br />
                    <input required type='text' minLength='10' maxLength='10' onChange={(e) => setphone(e.target.value)} value={phone} placeholder='Phone*' /><br />
                    <input required type='text' minLength='10' maxLength='100' onChange={(e) => setmessage(e.target.value)} value={message} placeholder='Message* (Maxminum 100 charcater)' /><br />
                    <button type='submit' disabled={isDisabled}>Submit Form</button>
                </form>
            </div>
        </div>
    </>
}

export default Contact