import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import MapChart from '../../maps/Map'
import emailjs from '@emailjs/browser'
import Header from '../../common/header/Header'

const Contact = () => {

  const currentUrl = window.location.pathname
  const [url, seturl] = useState(true)

  useEffect(() => {
    console.log(currentUrl)
    if (currentUrl == '/Contact'){
      seturl(false)
    }
  }, [])


  const form = useRef()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    emailjs.sendForm('service_pzlqcwj', 'template_44ansca', form.current, 'iwfI-b6K5eaDGMXdv').then((result) => {
      console.log(result.text);
      }, (error) => {
            console.log(error.text);
      });

    setname('')
    setemail('')
    setmessage('')
  };

  const handleChangeName = (e) => {
    setname(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setemail(e.target.value)
  }

  const handleChangeMessage = (e) => {
    setmessage(e.target.value)
  }

  return (
    <section className='contact-section'>
      {url ? null : <Header />}
      <div className="container-contact">
        <div className="left">
          <form ref={form} onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input name='user_name' type="text" placeholder='Name' onChange={handleChangeName} value={name}/>
            <input name='user_email' type="email" placeholder='Email' onChange={handleChangeEmail} value={email}/>
            <textarea name='message' placeholder='Write your message' onChange={handleChangeMessage} value={message}/>
            <button className='bnav'>Send</button>
          </form>
        </div>
        <div className="right">
          <MapChart />
        </div>
      </div>
    </section>
  )
}

export default Contact