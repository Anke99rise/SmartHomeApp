import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  fetchAllNotifications,
  updateNofication,
} from "../../actions/notifications";
import NotificationWidget from "../../components/NotificationWidget";

const NotificationScreen = ({
  fetchAllNotifications,
  notifications,
  navigation,
  updateNofication,
}) => {
  useEffect(() => fetchAllNotifications(), []);

  const renderItem = ({ item, index }) => {
    return (
      <NotificationWidget
        notification={item}
        index={index}
        key={index}
        updateNofication={updateNofication}
      ></NotificationWidget>
    );
  };

  return (
    <View style={styles.container}>
      {notifications && (
        <FlatList
          data={notifications}
          navigation={navigation}
          renderItem={renderItem}
          keyExtractor={(item) => item?.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const mapStateToProps = (state) => {
  return {
    notifications: state.app.notifications,
  };
};

const mapDispatchToProps = {
  fetchAllNotifications,
  updateNofication,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);
