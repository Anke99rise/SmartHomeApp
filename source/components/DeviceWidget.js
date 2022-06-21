import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../constants/app";

const DeviceWidget = (props) => {
  var img;

  switch (props.device.model) {
    case "moisture_sensor":
      img = (
        <Image
          source={require("../../assets/moisture_sensor.png")}
          style={styles.image}
        />
      );
      break;
    case "power_switch":
      img = (
        <Image
          source={require("../../assets/power.png")}
          style={styles.image}
        />
      );
      break;
    case "thermometer":
      img = (
        <Image
          source={require("../../assets/thermometer.png")}
          style={styles.image}
        />
      );
      break;
    case "smoke_sensor":
      img = (
        <Image
          source={require("../../assets/smoke.png")}
          style={styles.image}
        />
      );
      break;
    case "magnet_switch":
      img = (
        <Image
          source={require("../../assets/doors.png")}
          style={styles.image}
        />
      );
      break;
    case "light_switch":
      img = (
        <Image
          source={require("../../assets/light.png")}
          style={styles.image}
        />
      );
      break;
  }

  return (
    <View style={styles.widget}>
      <View style={styles.info}>
        <Text style={styles.title}>{props.device.name}</Text>
        <Text style={styles.text}>
          Current value: {props.device.current_value}
        </Text>
        <Text style={styles.text}>Alerts: {props.device.alerts}</Text>
      </View>
      <View>{img}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  widget: {
    padding: 30,
    marginVertical: 15,
    marginHorizontal: 40,
    backgroundColor: Colors.darkBlue,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: Colors.faded,
    marginVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  info: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "500",
    fontSize: 20,
    color: Colors.faded,
    marginVertical: 10,
  },
});

export default DeviceWidget;
