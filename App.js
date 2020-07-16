import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //View는 RN에서 <div>같은 것임
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Hello</Text>
      </View>
      <View style={styles.blueView}>
        <Text>Hello</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex : 1의 의미는 모든 공간을 사용 가능하다는 의미이다.
    flex: 1,
  },
  yellowView:{
    flex : 1,
    backgroundColor : "yellow"
  },
  blueView:{
    flex :1,
    backgroundColor:"blue"
  }
});
