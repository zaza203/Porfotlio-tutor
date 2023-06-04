import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {React, useState} from 'react'
import './contact.css'
import axios from "axios"
//import { Modal } from '../modal/Modal'
export const Contact = () => {

const [openModal, setOpenModal] = useState(false)



const [msg, setMsg] = useState('')
const [name, setName] = useState('')
const [email, setEmail] = useState('')

function openModalBtnn() {
  setOpenModal(true);
}

 const submit= async(e)=>{
  e.preventDefault()
  setMsg('');
  setName('');
  setEmail('');

  try {

      await axios.post("http://localhost:4000/", {
        name,
        email,
        msg
      })

  }
  catch(e) {
    console.log(e)
  }

  openModalBtnn()
}

  return (
    <section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option__icon" />
              <h4>Email</h4>
              <h5>einsteinzaza00@gmail.com</h5>
              <a
                href="mailto:aldenovpoutine99@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>

            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option__icon" />
              <h4>LinkedIn</h4>
              <h5>Profile</h5>
              <a
                href="https://www.https://www.linkedin.com/in/zaza-einstein-263666258/"
                target="_blank"
                rel="noreferrer"
              >
                Tape me on LinkedIn
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option__icon" />
              <h4>Whatsapp</h4>
              <h5>Direct message</h5>
              <a
                href="https://web.whatsapp.com/send?phone=+237691715866"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp me
              </a>
            </article>
          </div>

        <div className="contactform">
            <form action="POST">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="" required="required" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="" required="required" value={msg} onChange={(e)=>{setMsg(e.target.value)}} ></textarea>
                <span>Type your message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" onClick={submit} value="Send" className="btn btn-primary" />
              </div>
            </form>
          </div>
      </div>
    </section>
  )
}
export default Contact