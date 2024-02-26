import React from "react";

const Weather = (props) => (
        <div className="infoWeath">
            { props.city && 
            <div>
            <p>Location: {props.city}, {props.country}</p>
            <p>Temperature: {props.temp} C°</p>
            <p>Pressure: {props.pressure} mb</p>
            <p>Humidity: {props.humidity} %</p>
            <p>Sunset: {props.sunset}</p>
            </div>
            }
            <p className="error">{props.error}</p>
        </div>
)

export default Weather;