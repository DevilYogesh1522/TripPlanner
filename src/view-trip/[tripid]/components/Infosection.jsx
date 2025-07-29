import React from 'react'

function Infosection({ trip }) {
  return (
    <div className="w-full mt-10">
      <img
        src="/placeholder.jpg" // Replace with actual path
        alt="Trip Visual"
        className="w-[calc(100%-60px)] mx-[30px] h-[380px] object-contain rounded-xl"
      />
    </div>
  )
}

export default Infosection
