# weather-conditions

## Objective

Create a JavaScript class to represent general weather conditions and then extend it to display specific weather conditions for a day. This exercise aims to strengthen your understanding of ES6 class syntax, especially inheritance and method overriding.

## Purpose of Classes

### Weather Class:

The Weather class is the base template or parent that represents general weather conditions - temperature, precipitation, and description.

### DayWeather Class:

This class is a subclass or child that inherits and extends properties from the Weather class. It displays the conditions that are inherited and additional properties & methods specific to a day's condition.

### Summary

In summary, the DayWeather class extends the Weather class, inheriting all properties and methods from the Weather class. Thus allowing DayWeather to represent both the general & specific weather conditions for a particular day.

## Output Examples

```js
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
// const myWeather = new Weather (70, 25, "Sunny");
// console.log(myWeather.displayConditions());
// Output: Temperature: 70°F, Precipitation: 25%, Description: Sunny
```

```js
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
// const fridaysWeather = new DayWeather (94, 0, "Clear skies", "Friday" , 89);
// console.log(fridaysWeather.displayConditions());
// console.log(fridaysWeather.alert());
// Output: Today is Friday. Temperature: 90°F, Precipitation: 0%, Humidity: 89%, Description: Clear skies
```
