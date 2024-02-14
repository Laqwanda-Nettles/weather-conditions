"use strict";

class Weather {
  constructor(temperature, precipitation, description) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.description = description;
  }
  displayConditions() {
    return `Temperature: ${this.temperature} °F, Precipitation: ${this.precipitation}%, Description: ${this.description}`;
  }
}

class DayWeather extends Weather {
  constructor(temperature, precipitation, description, weekDay, humidity) {
    super(temperature, precipitation, description);
    this.weekDay = weekDay;
    this.humidity = humidity;
  }
  alert() {
    if (this.temperature >= 90) {
      return "Excessive Heat Warning: Please limit your time outdoors.";
    } else {
      return "There are no warnings today.";
    }
  }
  displayConditions() {
    return `Today is ${this.weekDay}. Temperature: ${this.temperature} °F, Precipitation: ${this.precipitation}%, Humidity: ${this.humidity}%, Description: ${this.description}`;
  }
}

const todaysWeather = new Weather(64, 0, "Mostly cloudy");
const wednesdaysWeather = new DayWeather(
  64,
  0,
  "Mostly cloudy",
  "Wednesday",
  62
);

document.getElementById("displayWeather").innerHTML =
  todaysWeather.displayConditions();

document.getElementById("displayDayWeather").innerHTML =
  wednesdaysWeather.displayConditions();

document.getElementById("dayWeatherAlert").innerHTML =
  wednesdaysWeather.alert();
