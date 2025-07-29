import axios from "axios";

const API_BASE_URL = "https://example.com/api"; // TODO: replace with real backend

export async function fetchBinData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/bins`);
    return response.data;
  } catch (error) {
    console.error("Error fetching bin data:", error);
    return []; // fallback to empty list on error
  }
}
