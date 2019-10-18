import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Credits extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.credits}>Credits: {children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  credits: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 0.5,
    color: "black",
    fontSize: 23,
    textAlign: "center",
    justifyContent: "center"  
  }
});
