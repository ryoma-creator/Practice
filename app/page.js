'use client'





export default function Page() { 
  return (

  <div className="container p-6">
    <form className="p-2 bg-black/20 text-white w-60
    ">

      <h1>Inquiry form</h1>
      <div>
        <p>Name</p>
        <input
          placeholder="ryoma taguchi"
          className="border"
        />
      </div>
      <div>
        <p>Mail Address</p>
        <input 
          className="border"
        />
      </div>
      <div>
        <p>title</p>
        <input 
          className="border"
        />
      </div>
      <div>
        <p>inquiry</p>
        <textarea
          className="border"
        />
      </div>

      <div>
        <button className="rounded-sm bg-blue-300">
          Send
        </button>
      </div>

    </form>
  </div>
  
  )
}