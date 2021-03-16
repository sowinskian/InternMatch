import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Profile from '../../assets/Profile.png';
import Messages from '../../assets/Messages.png';
import Pass from '../../assets/pass.png';
import Match from '../../assets/match.png';

const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human'
}

export default function Home(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={{ height: '6%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ width: '10%', height: "90%", marginRight: "5%"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ width: '100%', height: "100%" }}>
          <Image
            source={Profile}
            style={{ width: '100%', height: "100%" }}
          />
        </TouchableOpacity>
        <View style={{ width: '5%', height: "90%"}}></View>
        </View>
        <View style={{ width: '60%', height: "100%", justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: '#FF8047'}}>iM</Text>
        </View>
        <View style={{ width: '14.5%', height: "80%"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')} style={{ width: '100%', height: "100%" }}>
          <Image
            source={Messages}
            style={{ width: '100%', height: "100%" }}
          />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Software Engineering Intern</Text>
      </View>
      <View style={{ height: '10%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginBottom: "5%" }}>
        <View style={{ width: '40%', height: "100%", marginRight: "5%"}}>
        <TouchableOpacity onPress={() => {}} style={{ width: '100%', height: "100%", marginRight: "5%" }}>
          <Image
            source={Pass}
            style={{ width: '100%', height: "100%" }}
          />
        </TouchableOpacity>
        </View>
        <View style={{ width: '40%', height: "100%"}}>
          <TouchableOpacity onPress={() => {}} style={{ width: '100%', height: "100%", marginLeft: "5%" }}>
          <Image
            source={Match}
            style={{ width: '100%', height: "100%" }}
          />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    justifyContent: 'flex-start',
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
    height: '70%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    margin: "7%",
    padding: 20,
    alignItems: 'flex-start',
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

