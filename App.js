import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LightSensor from 'react-native-light-sensor';

// const { LightSensorModule } = NativeModules;
export default function App() {
  const [light, setLight] = useState("LUX")
  //LightSensor.startLightSensor(100);
  // DeviceEventEmitter.addListener('LightSensor', function (data) {
    // console.log(data.light)
    // setLight(data.light)
  // });
  // LightSensor.stopLightSensor();
  console.log(LightSensor);
  return (
    <View style={styles.container}>
      <Text>LightSensor reading: {light}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
