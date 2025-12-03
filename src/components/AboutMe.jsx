import React from 'react'
import aboutme from "../assets/aboutme4.jpg";
function AboutMe() {
    return (
        <div className="bg-white bg-opacity-20 p-6 rounded-lg" >
            <div className='font-italic text-black-300'>
                <h1 className='font-semibold text-black-300 text-left text-2xl p-5 '>About Me</h1>
                <div className='flex lg:flex-1 gap-10'>
                    <p className='w-200 text-center p-4 text-lg/15 text-black'>Hi, I’m <em className='font-bold text-black-500'>G. Dharshini</em>, a dedicated Full Stack Developer passionate about creating clean, responsive, and user-friendly web applications. I enjoy working with modern technologies like React, Node.js, Express, MongoDB, Java, Angular, and Spring Boot, and I love turning ideas into meaningful digital products.
                        <br />
                        I focus on writing clean code, building efficient interfaces, and developing scalable APIs. I’m always learning new tools and improving my skills to become a better engineer. My goal is to create solutions that are intuitive, functional, and impactful.</p>
                        <img src={aboutme} alt='aboutme ' />
                </div>
            </div>
        </div>
    )
}

export default AboutMe