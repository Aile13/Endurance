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
    padding: 13,
    marginBottom: 10,
    backgroundColor: "rgb(255, 191, 0)"
  },
  title: {
    borderRadius: 50,
    paddingVertical: 5,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 0.7,
    color: "black",
    fontSize: 27,
    textAlign: "center"
  }
});
