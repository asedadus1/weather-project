function kelvinToFahrenheit(kelvin) {
    return Math.round((kelvin - 273.15) * 9/5 + 32);
}
  



window.addEventListener('load', ()=> {

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    const imageElement = document.getElementById('my-image');



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long_1 = position.coords.longitude;
            lati_1 = position.coords.latitude;

            const proxy =`https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.openweathermap.org/data/3.0/onecall?lat=${lati_1}&lon=${long_1}&appid=23553e678a6b27fce3dc68b3e137b7b8`;
        
            fetch(api)
                .then(response => {
                return response.json();
            })
            .then( data => {
                console.log(data);
                const  {temp}=  data.current;
                const description = data.current.weather[0]['description'];
                const icon = data.current.weather[0]['icon'];

                // console.log(timeZone);
                // console.log(description);
                fahrenheit = kelvinToFahrenheit(temp)
          
                /*set Dom elements form the API
                console.log(temperatureDegree);
                console.log(temperatureDescription);
                console.log(locationTimezone);
                */

                temperatureDegree.textContent = fahrenheit;
                temperatureDescription.textContent = description;
                locationTimezone.textContent = data.timezone;
                imageElement.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                       
            });

        }); 
    }


    
});
