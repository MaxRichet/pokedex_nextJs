import React from 'react'

export default function contact() {
  return (
    <div>
        <h1>Page contact</h1>
        <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' />
            <label htmlFor="message">Message</label>
            <input type="message" name='message' id='message' />
            <button type='submit' className='cursor-pointer'>Envoyer</button>
        </form>
    </div>
  )
}
