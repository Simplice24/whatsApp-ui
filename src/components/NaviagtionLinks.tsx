import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationLinks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.link}>CHATS</Text>
      <Text style={styles.link}>ESTADOS</Text>
      <Text style={styles.link}>LLAMADAS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NavigationLinks;
