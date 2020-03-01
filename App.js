import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Title from "./Components/Title";
import Counter from "./Components/Counter";
import Credits from "./Components/Credits";
import Subtitle from "./Components/Subtitle";
import Legenda from "./Components/Legenda";
import TimeList from "./Components/TimeList";
import SettingButton from "./Components/SettingButton";
import Setting from "./Components/Setting";
import Storage from "./Components/Storage";

// Main class
class App extends React.Component {
  constructor(props) {
    super(props);

    // time list
    this.state = { times: [] };
  }

  componentDidMount() {
    // init estremi voti e tempo sufficienza se non già inizializzati
    Storage.initialInitParameters();
  }

  addTime = time => {
    this.setState({
      times: [...this.state.times, time]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Title>Endurance</Title>

        <Subtitle>TIMER</Subtitle>

        <Counter
          addTime={time => {
            this.addTime(time);
          }}
        />

        <Subtitle>LISTA TEMPI</Subtitle>

        <Legenda />

        <TimeList list={this.state.times} />

        <View style={styles.creditsAndSettings}>
          <Credits>Elia Pitozzi</Credits>
          <SettingButton
            onPress={() => {
              this.props.navigation.navigate("Settings");
            }}
          />
        </View>
      </View>
    );
  }
}

// creating root
const AppNavigator = createStackNavigator(
  {
    Home: App,
    Settings: Setting
  },
  {
    initialRouteName: "Home"
  }
);

// exporting app
export default createAppContainer(AppNavigator);

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "whitesmoke",
    justifyContent: "space-between"
  },
  creditsAndSettings: {
    flexDirection: "row",
    padding: 15
  }
});
