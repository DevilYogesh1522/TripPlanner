import React from 'react';
import { Link } from 'react-router-dom';

import PlacesCard from './PlacesCard';

function PlacesToVisit({ trip }) {
  return (
    <div className="w-full mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        🗺️ Places to Visit
      </h2>

      {Object.entries(trip?.tripData?.itinerary || {})
        .sort(([a], [b]) => parseInt(a.replace(/\D/g, "")) - parseInt(b.replace(/\D/g, "")))
        .map(([day, places]) => (
          <div key={day} className="mb-10">
            <h3 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                {day.replace(/\D/g, "")}
              </span>
              Day {day.replace(/\D/g, "")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {places?.map((place, index) => (
                 <PlacesCard place={place} index={index}/>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default PlacesToVisit;