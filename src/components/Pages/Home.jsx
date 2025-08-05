import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Discover Your Next Adventure
            </span>{' '}
            <br className="hidden sm:block" />
            With AI-Powered Travel Planning
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Your personal trip planner and travel curator, creating custom itineraries 
            tailored to your interests, preferences, and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to={'/createtrip'}>
              <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
                Plan Your Trip Now
              </Button>
            </Link>
            <Button variant="outline" className="px-8 py-6 text-lg border-2">
              How It Works
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '⏱️',
              title: 'Save Time',
              description: 'No more endless research - get perfect itineraries in minutes'
            },
            {
              icon: '💰',
              title: 'Budget Friendly',
              description: 'Options for every budget without compromising on experiences'
            },
            {
              icon: '❤️',
              title: 'Personalized',
              description: 'Tailored to your unique interests and travel style'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
      
      </div>
    </div>
  );
};

export default Home;