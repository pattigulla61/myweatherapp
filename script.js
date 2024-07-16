
            const apiKey="e32fe647732819a973e48008d0e7220d";
            const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            const searchbox= document.querySelector(".search input");
            const searchbtn= document.querySelector(".search button");
            const weatherIcon =document.querySelector(".weather-icon");



            async function checkWeather(city){
                const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
                var data= await response.json();
                console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
                document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

                if(data.weather[0].main=="Clouds"){
                    weatherIcon.src="c:/Users/sai/Downloads/pngwing.com (7).png";
                }
                else if(data.weather[0].main=="Clear"){
                    weatherIcon.src="c:/Users/sai/Downloads/pngwing.com (9).png";
                }
                else if(data.weather[0].main=="Drizzle"){
                    weatherIcon.src="c:/Users/sai/Downloads/pngwing.com (8).png";
                }
                else if(data.weather[0].main=="Rain"){
                    weatherIcon.src="c:/Users/sai/Downloads/pngwing.com (11).png";
                }
                else if(data.weather[0].main=="Mist"){
                    weatherIcon.src="c:/Users/sai/Downloads/pngwing.com (16).png";
                }
                else if(data.weather[0].main=="Snow"){
                    weatherIcon.src="c:/Users/sai/Downloads/pngwing.com (12).png";
                }
                
            }
            
            
            
            searchbtn.addEventListener("click",()=>{
                checkWeather(searchbox.value);

            })
    
