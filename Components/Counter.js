import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      on: false,
      count: 0
    };
  }

  addTime = time => {
    this.props.addTime(time);
  };

  countToString() {
    let count = this.state.count;
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    return minutes + ":" + seconds.toString().padStart(2, "0");
  }

  onPress = () => {
    // se timer attivo
    if (this.state.on) {
      // aggiungi nuovo tempo
      this.addTime(this.state.count);
    }
    // se timer spento
    else {
      // attiva timer
      this.setState({
        timer: setInterval(() => {
          this.setState({ count: this.state.count + 1 });
        }, 1000),
        on: true
      });
    }
  };

  onLongPress = () => {
    // reset del timer
    clearInterval(this.state.timer);
    // inizializzo stato timer
    this.setState({
      timer: null,
      on: false,
      count: 0
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        onLongPress={this.onLongPress}
      >
        <Text style={styles.container}>{this.countToString()}</Text>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 100,
    textAlign: "center",
    color: "darkblue"
  }
});
