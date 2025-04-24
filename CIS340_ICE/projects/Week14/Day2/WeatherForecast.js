import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Keep imports for teaching/demo purposes
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";
import { TextInput } from "react-native-gesture-handler";

class WeatherForecast extends Component {

  constructor(props){
    super(props);
    this.state = {zip: "", forecast: null};
  }

  _hndleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({forecast: forecast});
    });
  };

  render() {
    let content = null;

    if (this.state.forecast !== null){
      content = (
        <Forecast
        main={this.state.forecast.main}
        description ={this.state.forecast.description}
        temp={this.state.forecast.temp}
        feels_like={this.state.forecast.feels_like}
        temp_min={this.state.forecast.temp_min}
        temp_max={this.state.forecast.temp_max}
        humidity={this.state.forecast.humidity}
        wind_speed={this.state.forecast.wind_speed}
        wind_deg={this.state.forecast.wind_deg}
        pressure={this.state.forecast.pressure}
        visibility={this.state.forecast.visibility}
        sunrise={this.state.forecast.sunrise}
        sunset={this.state.forecast.sunset}
        city={this.state.forecast.city}
        country={this.state.forecast.country}
        icon={this.state.forecast.icon}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Image
        source= {require('../../../assets/sky.jpg')}
        resizeMode="cover"
        style={styles.backdrop}
        />
      <View style={styles.overlay}>
        <View style={styles.row}>
        <Text style={styles.mainText}>
          Current Weather for:{'\n'}
        </Text>

        <View style={styles.zipContainer}>
        <TextInput
        style={[styles.zipCode, styles.mainText]}
        onSubmitEditing= {this._hndleTextChange}
        />
        </View>
        </View>
        {content}
      </View>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#000000"
  },
  backdrop: {
    width: 500,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10
  },
  overlay: {
    paddingTop: 5,
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#FFFAF0",
    borderBottomWidth: 3,
    marginLeft: 18
  },
  zipCode: {
    flex: 1,
    width: 100,
    height: baseFontSize
  },
  mainText: {
    fontSize: baseFontSize,
    color: "#FFFAF0"
  }
});

export default WeatherForecast;
