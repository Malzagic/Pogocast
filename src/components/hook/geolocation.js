class Geolocation {
  constructor() {
    this.errorMessage = "";
    this.coords = {
      lat: undefined,
      lon: undefined,
    };
  }

  async start() {
    if ("geolocation" in navigator) {
      try {
        const poistion = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        this.coords = {
          lat: poistion.coords.latitude,
          lon: poistion.coords.longitude,
        };

        return this.coords;
      } catch (err) {
        this.message = err.message;
        console.log("Error getting geolocation: ", this.message);
      }
    } else {
      this.message = "Not Available!";
      console.log(this.message);
      this.coords = {
        lat: 53.4289,
        lon: 14.553,
      };
    }
  }
}

export { Geolocation };
