export default async function geolocation() {
  const message = {
    message: "",
  };
  let coords = {
    lat: undefined,
    lon: undefined,
  };

  if ("geolocation" in navigator) {
    message.message = "Available!";
    try {
      const poistion = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  
      coords = {
        lat: poistion.coords.latitude,
        lon: poistion.coords.longitude,
      };
    } catch(err) {
      console.log("Error getting geolocation: ", err.message)
    }
  } else {
    message.message = "Not Available!";
    console.log(message.message);
    coords = {
      lat: 53.4289,
      lon: 14.553,
    };
  }

  return coords;
}
