import React, {useState, useEffect, useCallback }from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

let globalMessages = [];
export default function Chat(props) {
  const { route, navigation } = props;
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    if(route.params.messageArray !== undefined) {
      for(let i = 0; i < route.params.messageArray.length;i++) {
        setMessages(previousMessages => GiftedChat.append(previousMessages, route.params.messageArray[i]));
      }
    }
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages)) 
    route.params.messageArrayFunction(messages[messages.length - 1]); 
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble 
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#ffbc40'
          }
        }}
        textStyle={{
          left: {
            color: '#fff'
          }
        }}
      />
    )
  }

  
  return (
    
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFECDB'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  card: {
    width: '90%',
    height: '82%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    margin: "7%",
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5
  }
})
