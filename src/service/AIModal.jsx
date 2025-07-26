import { GoogleGenAI } from '@google/genai';

// Replace this with your actual API key or load it via dotenv
const apiKey = process.env.VITE_Google_Place_Api;

async function main() {
  const ai = new GoogleGenAI({ apiKey });

  const tools = [
    {
      googleSearch: {},
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating Time travel to each of the location for 3 days with each day plan with best time to visit in JSON format.`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main().catch(console.error);
