import React from 'react'
import './contact.css'

function Contact({handleContact}) {
    return (
        <div className='overlay'>
            <div className='contactWindow'>

                <h2>Contact Us</h2>
                <button className='btn-close' onClick={()=>handleContact(false)}>&#10006;</button>

                <form action="https://formsbmit.co/mail" method='POST'>
                    <div className='formulaire'>
                        <input type='text' name='name' placeholder='Name' required/> 
                        <input type='email' name='email' placeholder='Email' required/>
                        <textarea rows ='9' cols='30' placeholder='Message...' required></textarea>
                    </div>
                    <button className='btn-submit'>Submit</button>
                </form>

            </div>
        </div>    
    )
}

export default Contact
