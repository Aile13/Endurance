import { AsyncStorage } from "react-native";

export default class Storage {
  static DATA = {
    // starting values
    // Tempo di Lancello 4' 30''
    tempoSufficienza: 270,
    votoMinimo: 4,
    votoMassimo: 10
  };

  static initialInitParameters() {
    if (this.isNotPopulated()) {
      this.initParameters();
    }
  }

  static async initParameters() {
    try {
      await AsyncStorage.setItem("data", JSON.stringify(this.DATA));
    } catch (error) {
      throw error;
    }
  }

  static async isNotPopulated() {
    // read from local data, check if already populated
    try {
      const data = await AsyncStorage.getItem("data");
      return data == undefined || data == null;
    } catch (error) {
      throw error;
    }
  }

  static async writeData(json) {
    try {
      await AsyncStorage.setItem("data", JSON.stringify(json));
    } catch (error) {
      throw error;
    }
  }

  static async readData() {
    try {
      const data = await AsyncStorage.getItem("data");
      return JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }
}
