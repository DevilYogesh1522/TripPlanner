import { GetPlacesDetails } from "@/service/GooglePhto";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";

function Hotels({ trip }) {
  return (
    <div className="w-full mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        🏨 Hotel Recommendations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCard hotel={hotel} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
