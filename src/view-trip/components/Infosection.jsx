import React, { useEffect, useState } from "react";
import { ImShare } from "react-icons/im";
import { FiCalendar, FiUsers, FiDollarSign } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { GetPlacesDetails } from "@/service/GooglePhto";

function Infosection({ trip }) {
  const [photourl, setPhotourl] = useState("/couple.jpg");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    setIsLoading(true);
    try {
      const response = {
        textQuery: trip?.userSelection?.destination || "",
      };
      const res = await GetPlacesDetails(response);
      const randomIndex = Math.floor( Math.random() * Math.max(8, res.data.places[0].photos.length) );
      const photoName = res.data.places[0].photos[randomIndex]?.name;
      if (photoName) {
        const PHOTO_REF_ID = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=1152&maxWidthPx=800&key=${
          import.meta.env.VITE_Google_Place_Api
        }`;
        setPhotourl(PHOTO_REF_ID);
      }
    } catch (error) {
      console.error("Error fetching photo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      {/* Hero Section with Glass Morphism Effect */}
      <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
        {isLoading ? (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 animate-pulse" />
        ) : (
          <>
            <img
              src={photourl}
              alt={trip?.userSelection?.destination || "Destination"}
              className=" inset-0 w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
              onError={() => setPhotourl("/couple.jpg")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </>
        )}

        {/* Floating Info Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {trip?.userSelection?.destination || "Your Destination"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                {trip?.userSelection?.days
                  ? `${trip.userSelection.days} day trip`
                  : "Amazing journey"}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm min-w-[100px]">
                <FiCalendar className="text-2xl text-blue-500 mb-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  DAYS
                </span>
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  {trip?.userSelection?.days || "N/A"}
                </span>
              </div>

              <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm min-w-[100px]">
                <FiUsers className="text-2xl text-purple-500 mb-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  TRAVELERS
                </span>
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  {trip?.userSelection?.travelers || "N/A"}
                </span>
              </div>

              <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm min-w-[100px]">
                <FiDollarSign className="text-2xl text-green-500 mb-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  BUDGET
                </span>
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  {trip?.userSelection?.budget || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <div className="absolute top-6 right-6">
          <Button
            variant="outline"
            className="rounded-full p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg hover:bg-white hover:dark:bg-gray-800 transition-all hover:scale-110 border border-white/20"
            aria-label="Share trip"
          >
            <ImShare className="text-xl text-blue-600 dark:text-blue-400" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Infosection;
