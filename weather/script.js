const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


  if ("geolocation" in navigator) {
    const options = {
        enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(function (position) {
        // Success callback
        const location_user = `${position.coords.latitude},${position.coords.longitude}`;

        //weather api call
        console.log(location_user);
        weather(location_user);

        
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
        // getlocation_ipconfig();
    }, options);
} else {
    console.error("Geolocation is not available in this browser.");
    getlocation_ipconfig();
}

let getlocation_ipconfig = ()=>{
    fetch("https://ipinfo.io/json")
        .then(response => response.json())
        .then(data => {
            // Log the full object returned
            console.log(data);
            // You can access specific properties of the data object as needed
            const location_user = data.loc;
            const city = data.city;
            const region = data.region;

            //weather api call
            console.log(location_user);
            // weather(city);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

//calling weather api
function weather(loc) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=b4a1bb3e233645e99dd154247232510&q=${loc}&days=10&aqi=yes&alerts=yes`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
            console.error("Error:", error);
        });
    
}

 

    

