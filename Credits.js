import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Credits extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View>
        <Text style={styles.credits}>Credits: {children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  credits: {
    margin: 5,
    borderRadius: 50,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 0.5,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "flex-end"
  }
});
