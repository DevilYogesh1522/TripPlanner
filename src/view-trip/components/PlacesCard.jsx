import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiDollarSign, FiStar } from 'react-icons/fi';
import { GetPlacesDetails } from '@/service/GooglePhto';
function PlacesCard({place,index}) {
    const[photoUrl,setPhotoUrl]=useState("")
     useEffect(() => {
        if (place) {
          fetchPlacePhoto();
        }
        
      }, [place]);
    
      const fetchPlacePhoto = async () => {
        try {
          const response = {
            textQuery: place?.placeName || "",
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
    <div>
      <Link
                  key={index}
                  to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    place.placeName
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:no-underline"
                >
                  <div className="h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300  cursor-pointer hover:-translate-y-1 ">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={photoUrl || '/place-placeholder.jpg'}
                        alt={place.placeName}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {place.placeName}
                      </h4>
                      <p className="text-gray-600 mb-3 line-clamp-3">
                        {place.placeDetails}
                      </p>
                    </div>
                    <div className="px-4 pb-4 grid grid-cols-2 gap-2 text-sm">
                      {place.bestTime && (
                        <div className="flex items-center text-gray-700">
                          <FiClock className="mr-2 text-blue-500" />
                          <span className="truncate">{place.bestTime}</span>
                        </div>
                      )}
                      {place.travelTime && (
                        <div className="flex items-center text-gray-700">
                          <FiMapPin className="mr-2 text-green-500" />
                          <span className="truncate">{place.travelTime}</span>
                        </div>
                      )}
                      {place.ticketPricing && (
                        <div className="flex items-center text-gray-700">
                          <FiDollarSign className="mr-2 text-amber-500" />
                          <span className="truncate">{place.ticketPricing}</span>
                        </div>
                      )}
                      {place.rating && (
                        <div className="flex items-center text-gray-700">
                          <FiStar className="mr-2 text-yellow-500" />
                          <span className="truncate">{place.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
    </div>
  )
}

export default PlacesCard
