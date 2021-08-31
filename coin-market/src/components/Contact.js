import React from 'react'
import './contact.css'

function Contact({handleContact, contactWindow}) {

    //overflow hidden
    if(contactWindow){
        document.body.classList.add('active')
    }else{
        document.body.classList.remove('active')
    }

    return (
        <div className='overlay'>
            <div className='contactWindow'>

                <h2>Contact Us</h2>
                <button className='btn-close' onClick={()=>handleContact(false)}>&#10006;</button>

                <form action="https://formsubmit.co/moufid.sgh@gmail.com" method='POST'>
                    <div className='formulaire'>
                        <input type='text' name='name' placeholder='Name' required/> 
                        <input type='email' name='email' placeholder='Email' required/>
                        <textarea rows ='12' cols='20' placeholder='Message...' required></textarea>
                    </div>
                    <button className='btn-submit'>Submit</button>
                </form>

            </div>
        </div>    
    )
}

export default Contact
