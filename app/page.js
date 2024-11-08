'use client'

import React, { useState } from "react";



export default function Page() { 

  const [message, setMessage] = useState('');
  const [submit, setSubmitted] = useState(false);

  const [click, setClicked] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  setMessage('OKOKOK');
};

const handleAlert = () => {
  alert('YOU CLICKED MEEEEEEE!!!!')
  setClicked(true);
}

return (
  <>
  {/* form */}
  <div className="p-6">
   <div className="max-w-md mx-auto">
      <form 
      className="flex items-center gap-4"
      onSubmit={handleSubmit}>
        <input 
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="入力してください"
        >
        </input>
        <button className="hover:text-green-300 hover:bg-black bg-green-500 text-white px-4 py-2 rounded-md">
          送信
        </button>
     </form>

     {setSubmitted && (
        <div className="">
          {message}
        </div>
     )}

   {/* click */}
   <div className="py-6">
      <button 
        className="border border-black/50 rounded-sm
         bg-gray-200"
        onClick={handleAlert}   
      >
        click me
      </button>
      {setClicked && (
        <div>
          YOU CLICKED MEEEEEE OHHHHHHHHH!!!
        </div>
      )}
      
   </div> 

   </div>



   </div>
  </>
);


}