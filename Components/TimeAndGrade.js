import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Storage from "./Storage.js";

export default class TimeAndGrade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: "270",
      position: "1",
      grade: 10,
      tempoSufficienza: 270,
      votoMin: 4,
      votoMax: 10
    };
  }

  calculateGrade = () => {
    const tempo = this.props.count;
    const tempoSuff = this.state.tempoSufficienza;
    const votoMin = this.state.votoMin;
    const votoMax = this.state.votoMax;
    const stepVoto = 5;

    const gradesSymbols = ["", "+", "½", "-"];
    const length = gradesSymbols.length;

    let timeDiff = (6 - votoMin) * length * stepVoto - stepVoto;
    for (let voto = votoMin; voto < votoMax; voto++) {
      for (let i = 0; i < length; i++) {
        if (tempo > tempoSuff + timeDiff) {
          // se trovo meno, cambio voto, uno in più
          if (gradesSymbols[i] === "-") {
            voto++;
          }
          return voto.toString(10) + gradesSymbols[i];
        }
        timeDiff -= stepVoto;
      }
    }
    return votoMax.toString(10) + "👍";
  };

  countToString = () => {
    let minutes = Math.floor(this.props.count / 60);
    let seconds = this.props.count % 60;
    return minutes + "' " + seconds.toString().padStart(2, "0") + "''";
  };

  positionToString = () => {
    return (1 + this.props.i).toString().padStart(2, "0");
  };

  async componentDidMount() {
    // read from local data and set
    const data = await Storage.readData();
    this.setState({
      tempoSufficienza: data.tempoSufficienza,
      votoMin: data.votoMinimo,
      votoMax: data.votoMassimo
    });

    // calculating grade and formatting count
    this.setState({
      count: this.countToString(),
      position: this.positionToString(),
      grade: this.calculateGrade()
    });
  }

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
