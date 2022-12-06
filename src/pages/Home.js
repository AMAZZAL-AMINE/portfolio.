import React from 'react'
import {social} from './data';
import MeImg from '../assets/images/amine.jpg'

function Home() {
  return (
    <div className='home_page'>
        <img 
            src={MeImg}
        />
        <div className='box_content'>
            <h1>HI THERE 👋</h1>
            <p>
                <span>I`m Mohamed Amine Amazzal, Full stack Developer.</span>
                Love Coffee, Hiking, Nature and Learning new Things.   
            </p>
            <div className='links' >
                {social.map(link => (
                    <a 
                        href={link.url}
                        target="_blank"
                        className='url'>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home