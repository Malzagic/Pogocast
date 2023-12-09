import axios from "axios";

class FetchingData {
  constructor(urls) {
    this.apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    this.urls = urls;
  }

  async get() {
    const completURL = `${this.urls}&appid=${this.apiKey}`;
    try {
      const res = await axios.get(completURL);
      const data = res.data;

      return data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  }
}

export { FetchingData };
