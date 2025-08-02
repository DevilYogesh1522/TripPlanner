import axios from "axios";

const baseurl = "https://places.googleapis.com/v1/places:searchText";

// ✅ Corrected config object
const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': import.meta.env.VITE_Google_Place_Api,
    'X-Goog-FieldMask': 'places.displayName,places.photos,places.id'
  }
};

// ✅ Function to get place details by text search
export const GetPlacesDetails = (data) => axios.post(baseurl, data, config);

// ✅ Example usage (for reference):
// const data = { textQuery: "Eiffel Tower Paris" };
// const result = await GetPlacesDetails(data);
