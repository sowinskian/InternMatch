import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import backButton from '../../assets/BackButton.png';
import GEA from '../../assets/GEA.png';
import intel from '../../assets/intel.png';

var GEAMessagesGlobal = [{
  _id: 1,
  text: 'Hey Zach, I would like to talk to you about the position you applied for!',
  createdAt: new Date(),
  user: {
    _id: 2,
    name: 'React Native',
    avatar: GEA,
  },
}];
var intelMessagesGlobal = [{
  _id: 1,
  text: 'Hi Zach, I took a look at your resume and I have a few quick questions, want to talk?',
  createdAt: new Date(),
  user: {
    _id: 2,
    name: 'React Native',
    avatar: intel,
  },
}];

export default function Messages(props) {
  const { navigation } = props;
  const [GEAMessageArray, setMessageGEAArray] = useState(GEAMessagesGlobal);
  const [intelMessageArray, setMessageintelArray] = useState(intelMessagesGlobal);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setMessageGEAArray(GEAMessageArray => GEAMessagesGlobal);
      setMessageintelArray(intelMessageArray => intelMessagesGlobal);
    });
    return unsubscribe;
  })

  const updateGEAMessagesGlobal = (message) => {
    setMessageGEAArray(GEAMessageArray => [...GEAMessageArray, message]);
    GEAMessagesGlobal.push(message);
  }
  const updateintelMessagesGlobal = (message) => {
    setMessageintelArray(intelMessageArray => [...intelMessageArray, message]);
    intelMessagesGlobal.push(message);
  }

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
        <TouchableOpacity onPress={() => navigation.navigate('Chat', {companyName: 'John (GE Appliances)', avatar: GEA, messageArrayFunction: updateGEAMessagesGlobal, messageArray: GEAMessageArray})} style={{ width: '100%', height: "80%"}}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: '100%', aspectRatio: 1 }}>
            <Image
              source={GEA}
              style={{ width: '100%', height: "100%" }}
            />
          </View>
          <View style={{ width: '74%', height: '55%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: '5%' }}>John (GE Appliances)</Text>
            <Text style={{ fontSize: 15, fontWeight: 'normal', paddingLeft: '5%' }}>{GEAMessageArray[GEAMessageArray.length - 1].text}</Text>
          </View>
          <View >
            <Text style={{ fontSize: 13, paddingTop: 5}}> {GEAMessageArray[GEAMessageArray.length - 1].createdAt.toString().split(' ')[4].split(':')[0]}:{GEAMessageArray[GEAMessageArray.length - 1].createdAt.toString().split(' ')[4].split(':')[1]} </Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', {companyName: 'Janie (Intel)', avatar: intel, messageArrayFunction: updateintelMessagesGlobal, messageArray: intelMessageArray})} style={{ width: '100%', height: "80%"}}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: '100%', aspectRatio: 1 }}>
            <Image
              source={intel}
              style={{ width: '100%', height: "100%" }}
            />
          </View>
          <View style={{ width: '74%', height: '55%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: '5%' }}>Janie (Intel)</Text>
            <Text style={{ fontSize: 15, fontWeight: 'normal', paddingLeft: '5%' }}>{intelMessageArray[intelMessageArray.length - 1].text}</Text>
          </View>
          <View>
            <Text style={{fontSize: 13, paddingTop: 5}}> {intelMessageArray[intelMessageArray.length - 1].createdAt.toString().split(' ')[4].split(':')[0]}:{intelMessageArray[intelMessageArray.length - 1].createdAt.toString().split(' ')[4].split(':')[1]} </Text>
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
