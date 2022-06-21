import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DeviceStack from "./screens/devices/DeviceNavigator";
import NotificationScreen from "./screens/notifications/NotificationScreen";
import Store from "./reduxStore";
import { DarkTheme } from "@react-navigation/native";

export default function () {
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
        <NavigationContainer theme={DarkTheme}>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Notifications">
      <Drawer.Screen
        name="DevicesPage"
        options={{ title: "Devices Tab" }}
        component={DeviceStack}
      />
      <Drawer.Screen
        name="AddDevicePage"
        options={{ title: "Add device" }}
        component={DeviceStack}
      />
      
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      {/*
      <Drawer.Screen name="User" component={UserScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}
