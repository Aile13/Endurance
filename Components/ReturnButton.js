import React from "react";
import { StyleSheet, Image, View, TouchableNativeFeedback } from "react-native";

export default class ReturnButton extends React.Component {
  onPress = () => {
    this.props.onPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this.onPress}>
          <Image
            style={styles.image}
            source={require("../assets/return.png")}
          />
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  image: {
    width: 60,
    height: 60
  }
});
