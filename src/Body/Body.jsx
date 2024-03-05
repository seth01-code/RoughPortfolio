import React from 'react'
import Header from '../Header/Header'
import './body.css'
import TextAnimation from '../Animation/TextAnimation'
import Image from '../assets/IMG-20240224-WA0213-removebg.png'
import { MdArrowRightAlt } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

function Body() {
  return (
    <>
    <div className='circle'><></></div>
    <section className="body-container">
      <Header/>
      <div className='circle1'>
        <div className="circle2"></div>
      </div>
      <div className="circle3"></div>
      <div className='Me-Area'>
        <h2>
            Hi,
        </h2>
        <h2>
        I'm <span>Prideof_All</span>
        </h2>
        <TextAnimation/>
        <div>
          <button className='hire'>
            Hire Me <div className='arrow'><MdArrowRightAlt/></div>
          </button>
        </div>
        </div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="cv-section">
          <p>Expert on</p>
          <h3>
            Frontend Development <br />
            Javascript (React) Programming Language.
          </h3>
          <p>
            Hey, are you looking for a Frontend engineer to build<br /> user-friendly web pages grow your brand and your business?<br /> Shake hands with me.
          </p>
          <small>
          <a href="#">Download CV <MdOutlineFileDownload/></a>
          </small>
        </div>
        <div className="chat">
          <a href="mailto:sethikhielea@gmail.com" className='chatting'>Let's Chat</a>
          <div className='chat-icon'>
            <p><IoChatboxEllipsesSharp/></p>
            <div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body
