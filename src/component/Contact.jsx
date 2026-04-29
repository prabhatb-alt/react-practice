// Controlled Components

import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (event,data) => {
        event.preventDefault()
        console.log("Data: ", data)
        if (!email.endsWith("krmu.edu.in")) {
            alert("Email is invalid")
            return
        }
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Message: ", message)
        
    }

  return (
    <div>
      <form onSubmit={()=>handleSubmit(data)}>
        <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>
            {setName(e.target.value)}} />
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>
            {setEmail(e.target.value)}} />
        <textarea placeholder='Enter your message' value={message} onChange={(e)=>
            {setMessage(e.target.value)}}></textarea>
        <input className="bg-blue-600 text-white" type='submit' value="Send" />
      </form>
    </div>
  )
}

export default Contact