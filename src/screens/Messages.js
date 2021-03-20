import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import backButton from '../../assets/BackButton.png';
import LM from '../../assets/LM.png';
import L3 from '../../assets/L3.png';

var LMMessages = [];
var L3Messages = [];
export default function Messages(props) {
  const { navigation } = props
  const LMMessage = 'Hey Zach, I would like to talk to you about the position you applied for!';
  const L3Message = 'Hi Zach, I took a look at your resume and I have a few quick questions, want to talk?'

  return (
    <View style={styles.container}>
      <View style={{ height: '6%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ width: '12%', height: "90%" }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width: '100%', height: "100%" }}>
            <Image
              source={backButton}
              style={{ width: '100%', height: "100%" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '60%', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Messages</Text>
        </View>
        <View style={{ width: '15%', height: "100%" }}></View>
      </View>
      <ScrollView>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', {companyName: 'John (Lockheed Martin)', avatar: LM, chatMessage: LMMessage, messageArray: LMMessages})} style={{ width: '100%', height: "80%"}}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: '100%', aspectRatio: 1 }}>
            <Image
              source={LM}
              style={{ width: '100%', height: "100%" }}
            />
          </View>
          <View style={{ width: '80%', height: '55%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: '5%' }}>John (Lockheed Martin)</Text>
            <Text style={{ fontSize: 15, fontWeight: 'normal', paddingLeft: '5%' }}>{LMMessage}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', {companyName: 'Janie (L3 Harris Space)', avatar: L3, chatMessage: L3Message, messageArray: L3Messages})} style={{ width: '100%', height: "80%"}}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: '100%', aspectRatio: 1 }}>
            <Image
              source={L3}
              style={{ width: '100%', height: "100%" }}
            />
          </View>
          <View style={{ width: '80%', height: '55%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: '5%' }}>Janie (L3 Harris Space)</Text>
            <Text style={{ fontSize: 15, fontWeight: 'normal', paddingLeft: '5%' }}>{L3Message}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      
      
      </ScrollView>
    </View>
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
    width: '95%',
    height: 90,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: "5%",
    padding: "4%",
    paddingBottom: "0%",
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
