import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { connect } from "react-redux";
import { Colors } from "../../constants/app";
import DeviceWidget from "../../components/DeviceWidget";

const SingleDeviceScreen = ({ route, devices }) => {
  const [device, setDevice] = useState({});
  useEffect(() => {
    const { itemId } = route.params;
    setDevice(devices[itemId]);
  }, []);
  return (
    <View>
      <DeviceWidget style={styles.widget} device={device}></DeviceWidget>
      <Text style={styles.text}>OVDJE UBACITI GRAF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    color: Colors.faded,
  },
});

const mapStateToProps = (state) => {
  return {
    devices: state.app.devices,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeviceScreen);
