import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="flex items-center gap-30 p-6 text-xl text-black  cursor-pointer">
        <h3 className="text-2xl text-red-600 font-bold">D/</h3>

        <span>About me</span>
        <span>Skills</span>
        <span>Projects</span>

        <button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
          My Resume
        </button>

        <span>Contact</span>
      </div>
    </div>
  )
}

export default Navbar
