import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WhatsAppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.iconsContainer}>
          <Icon name="search" size={24} color="white" style={styles.icon} />
          <Icon name="ellipsis-v" size={24} color="white" style={styles.icon} />
        </View>
      </View>
      <View style={styles.navLinks}>
        <View style={styles.cameraContainer}>
          <Icon name="camera" size={24} color="white" style={styles.cameraIcon} />
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.link}>CHATS</Text>
          <View style={styles.chatCountCircle}>
            <Text style={styles.chatCount}>1</Text>
          </View>
        </View>
        <Text style={styles.link}>ESTADOS</Text>
        <Text style={styles.link}>LLAMADAS</Text>
      </View>
      <View style={styles.rectangularBlock}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075E55',
    borderBottomWidth: 1,
    borderBottomColor: '#075E54',
    position: 'relative',
  },
  headerContainer: {
    backgroundColor: '#075E55',
    padding: 15,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#075E55',
    paddingVertical: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  chatCountCircle: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  chatCount: {
    color: '#075E55',
    fontWeight: 'bold',
  },
  rectangularBlock: {
    height: 5,
    width: 90,
    backgroundColor: 'white',
    left: 70,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  cameraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraIcon: {
    marginRight: 5,
  },
});

export default WhatsAppHeader;
