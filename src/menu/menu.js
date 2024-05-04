import React, {useRef, useEffect, useState } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './menu.css';
import logo from '../assets/logo.png'


const Menu = ({timeline, ease, about, services, projects, contact}) => {
    const [isOverlayActive, setOverlayActive] = useState(false);
    let logo1 = useRef(null);
    let item1 = useRef(null);
    let item2 = useRef(null);
    let item3 = useRef(null);  
    let item4 = useRef(null);
    let item5 = useRef(null);

    const handleMenuOpen = () => {
      console.log('button pressed')
      setOverlayActive(true);
    };
  
    const handleMenuClose = () => {
      setOverlayActive(false);
    };

    useEffect(() => {
        timeline.from(logo1, 1, {
            opacity: 0,
            y: '100'
        });
        timeline.from([item1, item2, item3, item4, item5], 2 ,{
            opacity: 0,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    })

    const scrolTo = (elemRef) => {
      if (elemRef && elemRef.current) {
        console.log("current ", elemRef.current)
        console.log("off ", elemRef.current.offsetTop)
        window.scrollTo({
          top: elemRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    };
 
    return (
      <>
        <header>
          <a className="logo" href="/"><img src={logo} alt="logo" ref = {el => logo1 = el}></img></a>
          <nav>
              <ul className="nav__links">
                <li  ref = {el => item1 = el} onClick={() => scrolTo(services)}><div className='elem'  >Services</div></li>
                <li  ref = {el => item2 = el} onClick={() => scrolTo(projects)}><div className='elem' >Projects</div></li>
                <li ref = {el => item3 = el} onClick={() => scrolTo(about)}><div className='elem' >About</div></li>
                <li ref = {el => item4 = el}><div className='elem' >Blog</div></li>
              </ul>
          </nav>
          <div ref = {el => item5 = el} onClick={() => scrolTo(contact)}><div className="cta"  >Contact</div></div>
          <p className="menu cta"  onClick={handleMenuOpen}>Menu</p>
        </header>

        <div id="mobile__menu" className={`overlay ${isOverlayActive ? 'overlay--active' : ''}`}>
          <a className="close"  onClick={handleMenuClose}>&times;</a>
          <div className="overlay__content">
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">About</a>
          </div>
        </div>

    
      </>
    );
  
}
export default Menu;