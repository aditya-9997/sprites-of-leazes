export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };
  
  export const getNearbyLighters = (location) => {
    // Fetch nearby Leazes Lighters based on the player's location
    // This could involve making an API call or querying a database
    const nearbyLighters = [
      { id: 1, latitude: 54.978252, longitude: -1.614489 },
      { id: 2, latitude: 54.977843, longitude: -1.613524 },
      { id: 3, latitude: 54.978012, longitude: -1.615201 },
    ];
    return nearbyLighters;
  };