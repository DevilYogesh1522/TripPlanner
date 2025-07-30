export const SelectTravelesList=[
  {
    id:1,
    title:'Just Me',
    desc:'A sole traveles in exploration',
    icon:'🚶',
    people:'1',
    src:'/justMe.jpg'
  },
  {
    id:2,
    title:'A Couple',
    desc:'Two traveles in tandem',
    icon:'👫',
    people:'2 People',
    src:'/couple.jpg'
  },
  {
    id:3,
    title:'Family',
    desc:'A group of fun loving adv',
    icon:'👨‍👩‍👧‍👦',
    people:'3 to 5 People',
    src:'/family.jpg'
  },
  {
    id:4,
    title:'Friends',
    desc:'Adventurous group seeking new horizons',
    icon:'👯',
    people:'5+ People',
    src:'/friends.jpg'
  },
  { // New entry 5
    id:5,
    title:'Business Trip',
    desc:'Focused travel for professional engagements',
    icon:'💼',
    people:'1 to 2 People',
    src:'/business.jpg'
  },
  { // New entry 6
    id:6,
    title:'Large Group',
    desc:'Organized tour or event attendance',
    icon:'🚌',
    people:'10+ People',
    src:'/largeGroup.jpg'
  },
]

export const SelectBudgetOptions=[
  {
    id:1,
    title:'Cheap',
    desc:'Stay conscious of costs',
    icon:'💰',
  },
  {
    id:2,
    title:'Moderate',
    desc:'Keep cost on the average side',
    icon:'💵',
  },
  {
    id:3,
    title:'Luxury',
    desc:'Indulge in premium experiences',
    icon:'💎', // Added an icon for consistency
  },
  
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {days} Days for {travelers} with a {budget} budget.Give me a Hotels options list with HotelName, Hotel address,location, Price, hotel  and suggest itinerary with placeName, Place Details,  ticket Pricing, rating, Time travel to each of the location for {days} days with each day plan with best time to visit in  JSON format only Please respond only with a valid JSON object. Do not include any explanation or markdown'
