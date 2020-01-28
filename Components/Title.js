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
    borderColor: "black",
    padding: 13
  },
  title: {
    borderRadius: 50,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 0.5,
    color: "black",
    fontSize: 27,
    textAlign: "center"
  }
});
