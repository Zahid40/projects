const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Success callback
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
    }, function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location has timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
        }
    });
} else {
    console.error("Geolocation is not available in this browser.");
}
 
fetch("https://ipinfo.io/json")
    .then(response => response.json())
    .then(data => {
        // Log the full object returned
        console.log(data);
        
        // You can access specific properties of the data object as needed
        const location = data.loc;
        const city = data.city;
        const region = data.region;
        
        // Now, you can use these properties as necessary
        console.log("Location:", location);
        console.log("City:", city);
        console.log("Region:", region);
        let root = document.getElementById('root');
    root.innerHTML = `${city}`;
    })
    .catch(error => {
        console.error("Error:", error);
    });

    

