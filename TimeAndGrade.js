import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TimeAndGrade extends React.Component {
  state = {
    position: 0,
    count: 0,
    grade: 10
  };

  calculateGrade = () => {
    // 3'00
    if (this.props.count < 180) this.setState({ grade: 10.0 });
    // 3'05
    else if (this.props.count < 185) this.setState({ grade: 9.75 });
    // 3'10
    else if (this.props.count < 190) this.setState({ grade: 9.5 });
    // 3'15
    else if (this.props.count < 195) this.setState({ grade: 9.0 });
    // 3'20
    else if (this.props.count < 200) this.setState({ grade: 8.5 });
    // 3'25
    else if (this.props.count < 205) this.setState({ grade: 8.25 });
    // 3'30
    else if (this.props.count < 210) this.setState({ grade: 8.0 });
    // 3'38
    else if (this.props.count < 218) this.setState({ grade: 7.75 });
    // 3'45
    else if (this.props.count < 225) this.setState({ grade: 7.5 });
    // 3'52
    else if (this.props.count < 232) this.setState({ grade: 7.25 });
    // 4'00
    else if (this.props.count < 240) this.setState({ grade: 7.0 });
    // 4'10
    else if (this.props.count < 250) this.setState({ grade: 6.75 });
    // 4'15
    else if (this.props.count < 255) this.setState({ grade: 6.5 });
    // 4'25
    else if (this.props.count < 265) this.setState({ grade: 6.25 });
    // 4'30
    else if (this.props.count < 270) this.setState({ grade: 6.0 });
    // 4'35
    else if (this.props.count < 275) this.setState({ grade: 5.75 });
    // 4'40
    else if (this.props.count < 280) this.setState({ grade: 5.5 });
    // 4'45
    else if (this.props.count < 285) this.setState({ grade: 5.0 });
    // 4'50
    else if (this.props.count < 290) this.setState({ grade: 4.5 });
    // 4'55
    else this.setState({ grade: 4.0 });
  };

  countToString = () => {
    let minutes = Math.floor(this.props.count / 60);
    let seconds = this.props.count % 60;
    return minutes + "' " + seconds.toString().padStart(2, "0") + "''";
  };

  componentWillMount = () => {
    this.setState({
      count: this.countToString(),
      position: '   ' + (1 + this.props.i).toString().padStart(2, "0") + '  '
    });

    this.calculateGrade();
  };

  render() {
    return (
      <View style={styles.riga}>
        <Text style={styles.word}> {this.state.position} </Text>
        <Text style={styles.word}> {this.state.count} </Text>
        <Text style={styles.word}> {this.state.grade.toPrecision(3)} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  riga: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  word: {
    color: "black",
    fontSize: 21,
  }
});
