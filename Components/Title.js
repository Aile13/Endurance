import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Title extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    borderColor: "black",
    padding: 10,
    paddingTop: 35
  },
  title: {
    borderRadius: 50,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 0.5,
    color: "black",
    fontSize: 25,
    textAlign: "center"
  }
});
