import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TimeAndGrade extends React.Component {
  constructor(props) {
    super(props);

    state = {
      position: 0,
      count: 0,
      grade: 10
    };
  }

  calculateGrade = () => {
    // 3'00
    if (this.props.count < 180) return "10☺";
    // 3'05
    else if (this.props.count < 185) return "10-";
    // 3'10
    else if (this.props.count < 190) return "9½";
    // 3'15
    else if (this.props.count < 195) return "9";
    // 3'20
    else if (this.props.count < 200) return "8½";
    // 3'25
    else if (this.props.count < 205) return "8+";
    // 3'30
    else if (this.props.count < 210) return "8";
    // 3'38
    else if (this.props.count < 218) return "8-";
    // 3'45
    else if (this.props.count < 225) return "7½";
    // 3'52
    else if (this.props.count < 232) return "7+";
    // 4'00
    else if (this.props.count < 240) return "7";
    // 4'10
    else if (this.props.count < 250) return "7-";
    // 4'15
    else if (this.props.count < 255) return "6½";
    // 4'25
    else if (this.props.count < 265) return "6+";
    // 4'30
    else if (this.props.count < 270) return "6";
    // 4'35
    else if (this.props.count < 275) return "6-";
    // 4'40
    else if (this.props.count < 280) return "5½";
    // 4'45
    else if (this.props.count < 285) return "5";
    // 4'50
    else if (this.props.count < 290) return "4½";
    // 4'55
    else return "4";
  };

  countToString = () => {
    let minutes = Math.floor(this.props.count / 60);
    let seconds = this.props.count % 60;
    return minutes + "' " + seconds.toString().padStart(2, "0") + "''";
  };

  positionToString = () => {
    return (1 + this.props.i).toString().padStart(2, "0");
  };

  componentWillMount = () => {
    this.setState({
      count: this.countToString(),
      position: this.positionToString(),
      grade: this.calculateGrade()
    });
  };

  render() {
    return (
      <View style={styles.riga}>
        <Text style={styles.word}> {this.state.position} </Text>
        <Text style={styles.word}> {this.state.count} </Text>
        <Text style={styles.word}> {this.state.grade} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  riga: {
    flexDirection: "row"
  },
  word: {
    flex: 1,
    color: "black",
    fontSize: 21,
    textAlign: "center"
  }
});
