import axios from "axios";

async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await axios.get<T | null>(url);
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
