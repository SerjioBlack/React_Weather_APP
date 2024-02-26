import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "f1af0a9faceb6811b84453f9bc0d89a5";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json();
    console.log(data);

    let sunset = data.sys.sunset;
    let date = new Date();
    date.setTime(sunset);
    let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sunset: sunset_date,
      error: undefined      
    });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        sunset: undefined,
        error: "Enter city name"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info"> 
              <Info /> 
            </div>
            <div className="col-sm-7 form">
            <Form weatherMethod={this.gettingWeather} />
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        pressure={this.state.pressure}
        humidity={this.state.humidity}
        sunset={this.state.sunset}
        error={this.state.error}
         />
            </div>
          </div>
        </div>
       
        
      </div>
      </div>
    );
  }
}

export default App;