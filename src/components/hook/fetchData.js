export default async function fetchData(url) {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const urls = url + `&appid=${apiKey}`;
  let res;
  try {
    res = await fetch(urls);
  } catch (err) {
    console.log(err);
  }

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}
