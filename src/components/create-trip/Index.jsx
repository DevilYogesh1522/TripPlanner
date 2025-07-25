import React, { useState } from "react";
import axios from "axios";

const GOMAPS_API_KEY = import.meta.env.VITE_GOMAPS_API_KEY; // Store API key securely

export const CreateTrip = () => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlaces = async () => {
    if (!query.trim()) {
      return; // Don't search if the input is empty
    }

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await axios.get(
        `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${query}&key=${GOMAPS_API_KEY}`
      );
      setPlaces(response.data.results || []);
    } catch (error) {
      setError("Error fetching places");
      console.error("Error fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h1 className="text-3xl font-bold text-center">Tell us Your Travel Preferences</h1>
      <p className="mt-3 text-gray-500 text-xl text-center">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className="mt-20">
        <h2 className="text-lg text-center">What is your destination of choice?</h2>
        
        <input
          type="text"
          placeholder="Enter a destination..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full mt-3 rounded-lg"
        />
        <button
          onClick={fetchPlaces}
          disabled={loading}
          className={`mt-3 ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white px-4 py-2 rounded-lg`}
        >
          {loading ? "Loading..." : "Search"}
        </button>

        {error && <p className="mt-3 text-red-500">{error}</p>}

        <ul className="mt-5">
          {places.length > 0 ? (
            places.map((place, index) => (
              <li key={index} className="p-2 border-b">
                {place.name}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
