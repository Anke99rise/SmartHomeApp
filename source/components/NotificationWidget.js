import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/app";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const NotificationWidget = (props) => {
  const [isRead, setIsRead] = useState(props.notification.isRead);
  const onPressHandler = (index, item) => {
    item["isRead"] = !item["isRead"];
    props.updateNofication(index, item);
    setIsRead(item["isRead"]);
  };
  return (
    <TouchableOpacity
      key={props.index}
      onPress={(e) => onPressHandler(props.index, props.notification)}
    >
      <View style={styles.widget}>
        <View>
          <View style={styles.title}>
            <p>{props.notification.title}</p>
          </View>
          <View style={styles.text}>
            <p>{props.notification.text}</p>
          </View>
        </View>
        <View style={styles.icon}>
          {isRead && (
            <Ionicons name="md-checkmark-circle" size={64} color="green" />
          )}
          {!isRead && <Ionicons name="md-alert" size={64} color="red" />}
        </View>
      </View>
    </TouchableOpacity>
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
    alignItems: "start",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: Colors.faded,
    marginVertical: 5,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.faded,
    marginVertical: 5,
  },
  icon: {
    flex: 1,
    alignItems: "end",
    justifyContent: "stretch",
  },
});

export default NotificationWidget;
