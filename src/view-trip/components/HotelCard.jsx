import { GetPlacesDetails } from "@/service/GooglePhto";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCard({ hotel, index }) {
  const [photoUrl, setPhotoUrl] = useState(hotel?.image || "/default-trip.jpg");

  useEffect(() => {
    if (hotel) {
      fetchPlacePhoto();
    }
  }, [hotel]);

  const fetchPlacePhoto = async () => {
    try {
      const response = {
        textQuery: hotel?.HotelName || "",
        maxResultCount: 5,
      };
      
      const res = await GetPlacesDetails(response);
      
      const places = res?.data?.places;
      if (!places || !places[0]?.photos?.length) return;

       const randomIndex = Math.floor( Math.random() * Math.max(8, res.data.places[0].photos.length) );
      const photoName = res.data.places[0].photos[randomIndex]?.name;
      

      if (photoName) {
        const photoUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=1152&maxWidthPx=600&key=${import.meta.env.VITE_Google_Place_Api}`;
        setPhotoUrl(photoUrl);
      }
    } catch (err) {
      console.error("Error fetching photo:", err);
    }
  };

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${hotel.HotelName},${hotel.Location}`}
      key={index}
      className="block hover:no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 border border-gray-100">
        <div className="h-48 overflow-hidden">
          <img
            src={photoUrl}
            alt={hotel?.hotelName}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.target.src = "/hotel-placeholder.jpg";
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {hotel?.HotelName
}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {hotel?.HotelAddress
}
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
              ₹{hotel.PriceInRupees || "N/A"}
            </span>
            <span className="flex items-center text-sm font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded">
              ⭐ {hotel?.Rating || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;
