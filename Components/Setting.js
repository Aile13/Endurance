import React from "react";
import { View, StyleSheet } from "react-native";

import Title from "./Title";
import Credits from "./Credits";
import ReturnButton from "./ReturnButton";
import Subtitle from "./Subtitle";
import SliderTempoSufficienza from "./SliderTempoSufficienza";
import PickerEstremiVoti from "./PickerEstremiVoti";

export default class Setting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title>Endurance</Title>
        <View>
          <Subtitle>TEMPO PER SUFFICIENZA</Subtitle>
          <SliderTempoSufficienza />
        </View>
        <View>
          <Subtitle>ESTREMI VOTI</Subtitle>
          <PickerEstremiVoti />
        </View>
        <View style={styles.creditsAndSettings}>
          <Credits>Elia Pitozzi</Credits>
          <ReturnButton onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    );
  }
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "whitesmoke"
  },

  creditsAndSettings: {
    flexDirection: "row",
    padding: 15
  }
});
