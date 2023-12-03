export default async function fetchData(url) {
  const apiKey = process.env.REACT_WEATHER_API_KEY;

  const res = await fetch(url);

  if(!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}
