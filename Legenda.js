import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Legenda extends React.Component {
  render() {
    return (
      <View style={styles.legenda}>
        <Text style={styles.words}>Posto</Text>
        <Text style={styles.words}>Tempo</Text>
        <Text style={styles.words}>Voto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  legenda: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  words: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  }
});
