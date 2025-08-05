import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from "@/constants/Options.jsx";
import { Button } from "../ui/button";
// Import your toast utilities
import { WarningToast, ErrorToast, SuccessToast } from "@/constants/Toasts";
import { chatSession } from "@/service/AIModal";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/service/FirebaseConfig";
import { useNavigate } from "react-router-dom";


export const CreateTrip = () => {
  const [place, setPlace] = useState(null); // Initialize as null or empty object
  const navigate=useNavigate();
  const [formData, setFormData] = useState({ // Initialize as an empty object
    destination: null,
    days: null,
    budget: null,
    travelers: null,
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCreateTrip =async () => {
    // 1. Validate required fields
    if (!formData.destination || !formData.days || !formData.budget || !formData.travelers) {
      ErrorToast('Please fill in all required travel preferences.');
      return; // Stop execution if validation fails
    }

    // 2. Validate days limit
    if (formData.days < 1 || formData.days > 7) {
      WarningToast('Trip duration must be between 1 and 7 days.'); // Corrected warning message
      return; // Stop execution if validation fails
    }

    // If all validations pass
    SuccessToast('Generating your trip...');
   
    // Add your trip generation logic here (e.g., API call)

    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}', formData?.destination)
    .replace('{days}', formData?.days)
    .replace('{travelers}',formData?.travelers)
    .replace('{budget}',formData.budget)
    .replace('{days}', formData?.days)
    
    const result=await chatSession.sendMessage(FINAL_PROMPT);
    SaveAiTrip(result.response?.text());
    
   
  };
  
const SaveAiTrip = async (TripData) => {
  const docid = Date.now().toString();

  // Remove Markdown formatting
  let cleanedJson = TripData.replace(/```json|```/g, "").trim();

  // Optional: Remove any trailing commas before closing brackets/braces
  cleanedJson = cleanedJson.replace(/,\s*([}\]])/g, '$1');

  let parsedTripData;
  try {
    parsedTripData = JSON.parse(cleanedJson);
  } catch (err) {
    console.error("❌ Invalid JSON from Gemini:\n", err);
    console.log("🔍 Raw TripData:\n", cleanedJson); // Optional: log for debugging
    return;
  }

  await setDoc(doc(db, "Trips", docid), {
    userSelection: formData,
    id: docid,
    tripData: parsedTripData,
  });
  navigate('/view-trip/'+docid);
};


    
  return (
    <div className="container mx-auto px-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10 max-w-screen-lg">

      {/* Page Title and Description */}
      <h1 className="text-3xl font-bold text-center mb-3">Tell us your travel preferences 🏕️🌴</h1>
      <p className="mt-3 text-gray-500 text-xl text-center mb-10">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      {/* Form sections wrapper */}
      <div className="max-w-2xl mx-auto">

        {/* Destination Input Section */}
        <div className="mb-8">
          <h2 className="text-xl my-3 font-medium text-left">What is destination of your choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_Google_Place_Api}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange('destination', v ? v.label : null); // Store label or null if cleared
              },
              placeholder: "Enter a destination...",
              styles: {
                control: (provided) => ({
                  ...provided,
                  padding: "0.25rem",
                  minHeight: "48px",
                  borderColor: 'rgb(209 213 219)',
                  '&:hover': {
                    borderColor: 'rgb(156 163 175)',
                  },
                }),
                input: (provided) => ({
                  ...provided,
                  padding: "0.5rem",
                }),
              },
            }}
          />
        </div>

        {/* Trip Days Input Section */}
        <div className="mb-10">
          <h2 className="text-xl my-3 font-medium text-left">How many days are you planning your trip?</h2>
          <Input
            placeholder="Ex.3"
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleInputChange('days', parseInt(e.target.value))} // Parse to int for number comparisons
          />
        </div>
      </div>

      {/* Budget Selection Section */}
      <div className="mt-10 max-w-2xl mx-auto">
        <h2 className="text-xl my-3 font-medium text-left">What is your Budget?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {SelectBudgetOptions.map((data) => (
            <div
              key={data.id}
              className={`flex flex-col items-center p-4 border rounded-lg shadow-sm hover:border-blue-500 cursor-pointer w-40 h-40 ${formData.budget === data.title ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'}`}
              onClick={() => handleInputChange('budget', data.title)}
            >
              <h2 className="text-4xl mb-2" role="img" aria-label={data.title}> {data.icon}</h2>
              <p className="text-lg font-semibold text-gray-800">{data.title}</p>
              <p className="text-sm text-gray-600 text-center">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travelers Selection Section */}
      <div className="mt-10 max-w-2xl mx-auto">
        <h2 className="text-xl my-3 font-medium text-left">Who do you plan on travelling with on your next adventure?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {SelectTravelesList.map((data) => (
            <div
              key={data.id}
              className={`flex flex-col items-center p-4 border rounded-lg shadow-sm hover:border-blue-500 cursor-pointer w-40 h-40 ${formData.travelers === data.title ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'}`}
              onClick={() => handleInputChange('travelers', data.title)}
            >
              <h2 className="text-4xl mb-2" role="img" aria-label={data.title}> {data.icon}</h2>
              <p className="text-lg font-semibold text-gray-800">{data.title}</p>
              <p className="text-sm text-gray-600 text-center">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleCreateTrip} className="my-10 flex mx-auto">Generate Trip</Button> {/* Centered button */}
    </div>
  );
};