import axios from "axios";

const API_BASE_URL = "/api"; // I setup a proxy to handle forwarding to http://localhost:5000

export async function fetchBinData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/bins`); // Fetching bin data from the backend API here. 
    return response.data;
  } catch (error) {
    console.error("Error fetching bin data:", error);
    return []; // fallback to empty list on error
  }
}

