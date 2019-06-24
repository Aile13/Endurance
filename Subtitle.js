import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Subtitle extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  subtitle: {
    margin: 5,
    paddingVertical: 1,
    paddingHorizontal: 7,
    color: "white",
    fontSize: 21,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "skyblue"
  }
});
