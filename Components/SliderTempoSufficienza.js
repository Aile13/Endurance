import React from "react";
import { View, StyleSheet, Text, Slider } from "react-native";

import Storage from "./Storage";

export default class SliderTempoSufficienza extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      estremoMinimo: 180, // 3' 00''
      estremoMassimo: 450, // 7' 30''
      tempoStep: 5,
      sliderValue: 210
    };
  }

  async componentDidMount() {
    // read from local data and set state
    const data = await Storage.readData();
    this.setState({ sliderValue: data.tempoSufficienza });
  }

  timeToString() {
    let minuti = Math.floor(this.state.sliderValue / 60);
    let secondi = this.state.sliderValue - minuti * 60;
    return minuti + "' " + secondi.toString().padStart(2, "0") + "''";
  }

  async onSlidingComplete(sliderValue) {
    const data = await Storage.readData();
    data.tempoSufficienza = sliderValue;
    await Storage.writeData(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.timeToString()}</Text>
        <Slider
          style={styles.slider}
          minimumValue={this.state.estremoMinimo}
          maximumValue={this.state.estremoMassimo}
          value={this.state.sliderValue}
          step={this.state.tempoStep}
          onValueChange={value => this.setState({ sliderValue: value })}
          onSlidingComplete={value => this.onSlidingComplete(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20
  },
  text: {
    fontSize: 24
  },
  slider: {
    width: 335,
    height: 75,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
