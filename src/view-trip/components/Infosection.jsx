import React from 'react'
import {SelectTravelesList, SelectBudgetOptions} from '@/constants/options.jsx'
import { ImShare } from "react-icons/im";
import { Button } from '@/components/ui/button';
function Infosection({ trip }) {
  console.log(trip)
const travelvalue=trip?.userSelection?.travelers;
const budgetvalue=trip?.userSelection?.budget;
const budgetoptions=SelectBudgetOptions.find((item)=>(item.title===budgetvalue)) 
const traveloption=SelectTravelesList.find((item)=>(
  item.title===travelvalue
))
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <div className="rounded-xl overflow-hidden">
        <img
          src={traveloption?.src} // Replace with actual image path
          alt="Trip Visual"
          className="w-full h-[380px] object-contain"
        />
      </div>

     <div className="mt-6 space-y-4">
  {/* Flex container for heading and share button */}
  <div className="flex justify-between border-b items-center">
    <h2 className="text-3xl font-extrabold text-gray-800  pb-2">
      {trip?.userSelection?.destination}
    </h2>
    <Button className='m-1'><ImShare /></Button>
  </div>

  {/* Trip info */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-gray-600 text-base">
    <p>
      <span className="font-semibold text-gray-800">📆 Days:</span> {trip?.userSelection?.days}
    </p>
    <p>
      <span className="font-semibold text-gray-800">
        {traveloption?.icon} Travelers:
      </span>{" "}
      {trip?.userSelection?.travelers}
    </p>
    <p>
      <span className="font-semibold text-gray-800">
        {budgetoptions?.icon} Budget:
      </span>{" "}
      {trip?.userSelection?.budget}
    </p>
  </div>
</div>
      
    </div>
  )
}

export default Infosection
