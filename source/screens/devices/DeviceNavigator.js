import { createStackNavigator } from "@react-navigation/stack";
import DeviceScreen from "./DeviceScreen";
import SingleDeviceScreen from "./SingleDeviceScreen";
import AddDevice from "./AddDevice";
import React from "react";

const Stack = createStackNavigator();

function DeviceStack() {
  return (
    <Stack.Navigator initialRouteName="Devices">
      <Stack.Screen
        name="Devices"
        options={{ title: "Devices List" }}
        component={DeviceScreen}
      />
      <Stack.Screen
        name="AddDevice"
        options={{ title: "Add device" }}
        component={AddDevice}
      />
      <Stack.Screen
        name="DeviceDetails"
        options={{ title: "Single Device" }}
        component={SingleDeviceScreen}
      />
    </Stack.Navigator>
  );
}

export default DeviceStack;
