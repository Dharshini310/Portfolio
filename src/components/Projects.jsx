import React from 'react'

function Projects() {
  return (
    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
        <div className='font-italic text-black-300'>
                <h1 className='font-semibold text-black-300 text-left text-2xl p-5 '>Projects</h1>
                <div className='border rounded-lg p-10'>
                  <div className='flex flex-1 justify-evenly'>
                  <h2 className='text-2xl text-black'>MentorMesh</h2>
                  <a href="https://github.com/Dharshini310/Mentor_Mesh" className='text-blue-600 text-1xl'>Github Link</a>
                  </div>
                  <p className='text-center  pl-30 pt-10 text-black text-lg/10'>I developed a full-stack social web application that enables users to create, like, and save posts, delivering an engaging and interactive experience. To ensure secure data handling, I implemented robust JWT-based authentication along with well-structured RESTful APIs. Additionally, I enhanced the overall user experience by designing a responsive interface and integrating real-time toast notifications for seamless and intuitive interactions.</p>
                  <p className='text-center  pl-30 pt-10 text-black'>Skills Used : React.JS || Express.JS || Node.JS || MongoDB</p>

                </div><br/>
                <div className='border rounded-lg p-10'>
                  <div className='flex flex-1 justify-evenly'>
                  <h2 className='text-2xl text-black'>Recipe Sharing Platform</h2>
                  <a href="https://github.com/Dharshini310/Recipe_Sharing_Platform" className='text-blue-600 text-1xl'>Github Link</a>
                  </div>
                  <p className='text-center  pl-30 pt-10 text-black text-lg/10'>I created a responsive web application that allows users to add and view their favorite recipes, ensuring a smooth and user-friendly experience across devices. Additionally, I implemented React Hooks for efficient state management and enhanced the overall UI layout to improve usability and visual appeal.</p>
                  <p className='text-center  pl-30 pt-10 text-black'>Skills Used : React.JS || CSS3 || Node.JS </p>
                </div>
            </div>
    </div>
  )
}

export default Projects