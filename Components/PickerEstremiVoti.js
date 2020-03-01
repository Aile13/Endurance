import React from "react";
import { View, Text, StyleSheet, Picker, AsyncStorage } from "react-native";

import Storage from "./Storage";

export default class PickerEstremiVoti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      promptMin: "Voto minimo",
      promptMax: "Voto massimo",
      votoMin: 1,
      votoMax: 10
    };
  }

  async componentDidMount() {
    // read from local data and set state
    const data = await Storage.readData();
    this.setState({
      votoMin: data.votoMinimo,
      votoMax: data.votoMassimo
    });
  }

  async saveVotoMin(voto) {
    const data = await Storage.readData();
    data.votoMinimo = voto;
    await Storage.writeData(data);
  }

  async saveVotoMax(voto) {
    const data = await Storage.readData();
    data.votoMassimo = voto;
    await Storage.writeData(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Da</Text>

        <Picker
          selectedValue={this.state.votoMin}
          style={styles.picker}
          mode={"dialog"}
          prompt={this.state.promptMin}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ votoMin: itemValue });
            this.saveVotoMin(itemValue);
          }}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>

        <Text style={styles.text}>a</Text>

        <Picker
          selectedValue={this.state.votoMax}
          style={styles.picker}
          mode={"dialog"}
          prompt={this.state.promptMax}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ votoMax: itemValue });
            this.saveVotoMax(itemValue);
          }}
        >
          <Picker.Item label="7" value={7} />
          <Picker.Item label="8" value={8} />
          <Picker.Item label="9" value={9} />
          <Picker.Item label="10" value={10} />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 24
  },
  picker: {
    paddingTop: 30,
    width: 90
  },
  pickerItem: {
    fontSize: 8
  }
});
