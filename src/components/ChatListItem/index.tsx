import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

interface Chat {
  id: number;
  name: string;
  time: string;
  message: string;
  profile: any; // Change this to the appropriate type for image URIs
}

interface ChatListItemProps {
  chat: Chat;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat }) => {
  const { id, name, time, message, profile } = chat;

  const getMessageColor = (messageId: number) => {
    return messageId === 2 ? "#37d475" : "#A4A9AC";
  };

  const setChatTimeColor = (messageId: number) => {
    return messageId === 1 ? "#37d475" : "#A4A9AC";
  };

  return (
    <View style={styles.chatContainer}>
      <Image
        source={profile} // Use profile directly as source without curly braces
        style={styles.profileImage}
      />
      <View style={styles.chatDetails}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.chatName}>{name}</Text>
          <Text style={[styles.chatTime, { color: setChatTimeColor(id) }]}>
            {time}
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={[styles.message, { color: getMessageColor(id) }]}>
            {message}
          </Text>
          {id === 1 && ( 
            <View style={styles.messageCountCircle}>
              <Text style={styles.messageCount}>2</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
    flexDirection: "column",
    height: 70,
  },
  nameTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  chatName: {
    fontWeight: "bold",
  },
  chatTime: {
    fontSize: 12,
    color: "#A4A9AC",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between",
  },
  message: {
    fontSize: 16,
  },
  messageCountCircle: {
    backgroundColor: "#37d475",
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  messageCount: {
    color: "#fff",
    fontWeight: "bold",
  },
});
