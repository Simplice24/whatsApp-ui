import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import WhatsAppHeader from './src/components/WhatsAppHeader';

import Icon from 'react-native-vector-icons/FontAwesome';


const chats = [
  { id: 1, name: 'Fin de semana', time: '9:49', message: 'Sofia:sticker', profile: require('./src/profileImages/smile.jpeg') },
  { id: 2, name: 'Francisco Flores', time: '9:45', message: 'escribiendo...', profile: require('./src/profileImages/image-2.jpg')},
  { id: 3, name: 'Carolina Gonzalez', time: '9:37', message: '📷 Un desayuno inolvidable', profile: require('./src/profileImages/child.jpg')},
  { id: 4, name: 'Familia', time: '9:09', message: 'Mama:iQue linda 😍', profile: require('./src/profileImages/image-1.jpeg')},
  { id: 5, name: 'Cecilia Paz', time: '8:58', message: 'iMe encanto verte! iEspero que...', profile: require('./src/profileImages/image-3.jpg')},
  { id: 6, name: 'Grupo del almuerzo', time: '9:30', message: 'Marcos Gonzalez:📹 GIF', profile: require('./src/profileImages/grup.jpg')},
  { id: 7, name: 'Pasteleria Sandra', time: '8:10', message: 'Estara listo el jueves.', profile: require('./src/profileImages/image-7.jpeg')},
];

export default function App() {
  return (
    <View style={styles.container}>
      <WhatsAppHeader />
      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
      <View style={styles.greenCircle}>
        <Icon name="envelope" size={24} color="white" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  greenCircle:{
    position: 'absolute',
    bottom: 30,
    right: 15,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#00CE40',
    alignItems: 'center',
  },
});
