import React from 'react';

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">About TripPlanner</h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <strong>TripPlanner</strong> is your intelligent travel companion designed to help you plan the perfect trip.
        Whether you're exploring a new city or going on a vacation with friends or family, our platform uses
        smart recommendations and the power of Google APIs to suggest top destinations, hotels, and attractions.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our goal is to make trip planning faster, smarter, and stress-free. You select your preferences — like destination,
        number of days, travel style, and budget — and TripPlanner does the rest. It finds places to visit, budget-friendly
        or luxurious hotels, and provides images to visualize your trip before it even begins.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-2 text-indigo-500">🚀 Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Smart destination suggestions</li>
            <li>Hotel and place recommendations using Google Places API</li>
            <li>Clean, responsive UI built with React & Tailwind CSS</li>
            <li>Firebase backend integration</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-2 text-indigo-500">👨‍💻 Built With</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React.js + Vite</li>
            <li>Tailwind CSS</li>
            <li>Firebase Firestore</li>
            <li>Google Places API</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-600 text-sm">
        Made with ❤️ by Yogesh Chaudhari
      </div>
    </div>
  );
}

export default About;
