import React, { useState } from 'react'
import contact from "../assets/contact.jpg"
function Contact() {
    const [email,setEmail] = useState("");
    const [suggestion,setSuggestion] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        try{
            if(email.trim() == "" || suggestion.trim() == "")
            {
                alert("Please Fill the Form");
            }
            alert("Successfully shared your suggestion");
            console.log(email,suggestion);
            setEmail("");
            setSuggestion("");
        }catch(e){
            console.error(e);
        }
    }
  return (
    <div className="flex flex-1 justify-center items-center min-h-screen bg-white gap-10">
        <img src={contact} alt='loading' className='h-[78vh]'/>
      <form className="bg-white-100 shadow-lg border rounded-lg p-10 w-full" onSubmit={handleSubmit}>
        
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) =>{setEmail(e.target.value)}}
          className="border w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          rows={6}
          placeholder="Enter Your Suggestions"
          value={suggestion}
          onChange={(e)=>{setSuggestion(e.target.value)}}
          className="border w-full p-2 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-600 hover:cursor-pointer transition">
          Submit
        </button>

      </form>
    </div>
  )
}

export default Contact
