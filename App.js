import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title>
        Finantial
      </Title>
      <StatusBar style="dark" />
      

      {/* <View>
        <Text>React Native</Text>
        <Text>Criando aplicações de Android e iOS</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8DE',
    padding: 30,
  },
});
//#2D3047
//#F5F8DE
//#1B998B
//#01161E
//#124559