import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import { fetchAllDevices } from "../../actions/devices";
import DeviceWidget from "../../components/DeviceWidget";
import { TouchableOpacity } from "react-native-gesture-handler";

const DeviceScreen = ({ fetchAllDevices, devices, navigation }) => {
  useEffect(() => fetchAllDevices(), []);

  const onPressHandler = (index) => {
    navigation.push("DeviceDetails", {
      itemId: index,
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={(e) => onPressHandler(index)}>
        <DeviceWidget device={item} index={index} key={index}></DeviceWidget>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {devices && (
        <FlatList
          data={devices}
          navigation={navigation}
          renderItem={renderItem}
          keyExtractor={(item) => item?.name}
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
    devices: state.app.devices,
  };
};

const mapDispatchToProps = {
  fetchAllDevices,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceScreen);
