import './section.css';
import Menu from '../../menu/menu.js';
import React, {useRef, useEffect, useState } from 'react';
import { Element, Link, animateScroll as scroll } from 'react-scroll';
import Design from '../Design.js';
import lap from '../../assets/lap-ai.svg'
import {gsap, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons';

function scrollToTop() {
  scroll.scrollToTop();
}

const Section = () => {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  let Hill = useRef(null);
  let isTo = useRef(null);
  let small = useRef(null);
  let img1 = useRef(null);

  let services = useRef(null);
  let about = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);

  useEffect(() => {
      tl.from([Hill, isTo, small], 1,{
        opacity: 0,
        y: "100",
        skewY: 10,
        stagger: {
            amount: .4
        }
    },"-=1")
  },[])

  useEffect(()=>{
    tl.from(img1, 2, {
      opacity: 0,
      x: -2200,
      stagger: {
          amount: .4
      }
  },"-=0.2")
  })


  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
      <div className='All'>

        <Menu timeline = {tl} ease= {ease} about={about} services={services} projects={projects} contact={contact}/>

        <div  className="element1" >

            <img ref={el=>img1=el} className='laptop' src={lap}></img>
            <Design></Design>
            <div className='Hill' ><div ref={el=>Hill=el}>No Detail</div><br /><div ref={el=>isTo=el}>is too</div><br /><div ref={el=>small=el}>small!</div></div>
            {/* <div className='Hill2'></div>  */}
        </div>


        <div  className="element2" ref={services} >
            <section>
            We’re Ana<span className='leet'>leet</span>ics
          <p>Created by 1337 Students, We specialize in harnessing the power of data and cutting-edge IT solutions to tackle challenges, nurture startups, and facilitate growth for businesses across diverse industries. Whether it's developing innovative software, optimizing data strategies, or providing tailored IT solutions.</p>
            </section>
          
        </div>

        <div  className="element3" ref={about}>
            <section>
            <div class="row">
              <h1>Our Team</h1>
            </div>

            <div class="row">

              <div class="column">
                <div class="card">
                  <div class="img-container">
                    <img src="profile-img-1.png" />
                  </div>
                  <h3>Safae meftah El Menani</h3>
                  <p>Co-Founder | Software Engineer</p>
                  <div class="icons">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="#">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <div class="img-container">
                    <img src="profile-img-1.png" />
                  </div>
                  <h3>Remidi Kamal</h3>
                  <p>Co-Founder | Software Engineer<br />Data Analyst</p>
                  <div class="icons">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="#">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <div class="img-container">
                    <img src="profile-img-2.png" />
                  </div>
                  <h3>El-Mahdi Safouane</h3>
                  <p>Co-Founder | Software Engineer</p>
                  <div class="icons">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="#">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <div class="img-container">
                    <img src="profile-img-3.png" />
                  </div>
                  <h3>Saad El Biyyadi</h3>
                  <p>Co-Founder | Software Engineer</p>
                  <div class="icons">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="#">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            </section>
        </div>

        <div className='element4' ref={contact}>
        <div className='contact_'>
            <h2>Get in Touch TODAY</h2>
            <p>To contact our team, please complete the form.

For Sport projects, please visit the Sport <a style={{color: "white"}} href='#'>Analeetics</a> website to find our resources.

Any developing innovative software, optimizing data strategies, or providing tailored IT solutions.</p>
</div>
          <div className='container_'>
            <div className='contactInfo'>
              <div className='box'>
                <div className='icone'><FontAwesomeIcon icon={faLocationDot} /></div>
                <div className='text'>
                  <h3>Address</h3>
                  <p>Address,<br />city,<br />code postal</p>
                </div>
              </div>
              <div className='box'>
                <div className='icone'><FontAwesomeIcon icon={faPhone} /></div>
                <div className='text'>
                  <h3>Phone</h3>
                  <p>0623000000</p>
                </div>
              </div>
              <div className='box'>
                <div className='icone'><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className='text'>
                  <h3>Email</h3>
                  <p>contact@analeetics.solutions</p>
                </div>
              </div>


            </div>
          
          <div className='contactForm'>


            <form action='https://formspree.io/f/mwkgywqa' method="POST">
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type='text' name='user_name' required/>
              <span>Name</span></div>
              <div className='inputBox'>

                <input type='email' name="_replyto" required />
              <span>Email</span></div>
              <div className='inputBox'>

                <textarea name='message' required />
                <span>Type your Message...</span>
              </div>
              <div className='inputBox'>

              <input type='submit' value='Send' /></div>
            </form></div></div>
        </div>
        <div className='element5' ref={contact}>
        </div>

      </div>
    </>
  );
};

export default Section;
