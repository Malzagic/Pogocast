class WindDirection {
  constructor(wind) {
    this.wind = wind;
    this.directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  }

  currDir() {
    // Ensure wind angle is positive and within the range [0, 360)
    const normalizedWind = ((this.wind % 360) + 360) % 360;

    // Calculate the index based on the number of directions
    const index =
      Math.round((normalizedWind % 360) / 45) % this.directions.length;

    return this.directions[index];
  }
}

export { WindDirection };
