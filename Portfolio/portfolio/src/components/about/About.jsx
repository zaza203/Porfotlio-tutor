import React from 'react'
import './about.css'
import moi from '../../assets/Zagido-removebg-preview.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Zadolf " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </article>
            </div>
            <p>
              I am a computer engineering student  at the Faculty of
              Engineering and Technology (FET) in the University of Buea . I enrolled
              for a B.eng program in 2021. This is my second year and i am intending to do software,
              I am an intermidiate in the following programming languages together with frameworks
              and libraries: python, javaScript, React and Django. I am interested in learning the MERN stack
              and also want to further my knowledge in AI and mechine learning and natural language processing (NLP).
              I am an English speaking individual. I had my high school certificate (A'Level) in English
              and i am still studying in English here in the university.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
