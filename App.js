import React from "react";
import { StyleSheet, View } from "react-native";

import Title from "./Title";
import Counter from "./Counter";
import Credits from "./Credits";
import Subtitle from "./Subtitle";
import Legenda from "./Legenda";
import TimeList from "./TimeList";

export default class App extends React.Component {
  state = {
    times: []
  };

  addTime = time => {
    this.setState({
      times: [...this.state.times, time]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Title>Endurance</Title>

        <Subtitle>TIMER</Subtitle>

        <Counter
          color={"darkblue"}
          size={100}
          addTime={time => {
            this.addTime(time)
          }}
        />

        <Subtitle>LISTA TEMPI</Subtitle>

        <Legenda />

        <TimeList list={this.state.times} />

        <Credits>Elia Pitozzi</Credits>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "whitesmoke"
  }
});
