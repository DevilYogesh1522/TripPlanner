import React from 'react';
import { Link } from 'react-router-dom';

function Hotels({ trip }) {
  return (
    <div className="w-full mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        🏨 Hotel Recommendations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trip?.tripData?.hotelOptions.map((hotel, index) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query= ${hotel.hotelName},${hotel.location}`}
            key={index}
            className="block hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-95">
              <img
                src={hotel?.image}
                alt="Hotel"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {hotel?.hotelName}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {hotel?.hotelAddress}
                </p>
                <p className="text-sm text-gray-700 font-medium">💰 {hotel.price}</p>
                <p className="text-sm text-yellow-500 font-semibold">⭐ {hotel?.hotelRating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
