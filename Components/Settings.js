import React from "react";
import { StyleSheet, Picker, Image, View, TouchableNativeFeedback} from "react-native";

export default class Settings extends React.Component {

  onPress = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this.onPress}>
            <Image source={require('../assets/settings.png')}
                   width={26} />
        </TouchableNativeFeedback>
      </View>

)
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  }
})