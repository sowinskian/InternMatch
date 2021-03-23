import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Profile from '../../assets/Profile.png';
import Messages from '../../assets/Messages.png';
import Back from '../../assets/Back.png';
import Skip from '../../assets/Skip.png';
import Match from '../../assets/Match.png';

import JobCard from '../components/JobCard'
import InternshipPostings from '../content/InternshipPostings'

const TopBar = ({navigation}) =>
    <View style={topBarStyles.container}>
        <View style={topBarStyles.profileView}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={Profile} style={topBarStyles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={topBarStyles.logoView}>
            <Text style={topBarStyles.logo}>iM</Text>
        </View>
        <View style={topBarStyles.messagesView}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Messages')}
                style={topBarStyles.messages}>
                <Image source={Messages} style={topBarStyles.icon}/>
            </TouchableOpacity>
        </View>
    </View>

const topBarStyles = {
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFECDB',
        height: '7%',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: '3%'
    },

    profileView: {
        flexDirection: 'row'
    },

    logoView: {
        justifyContent: 'center'
    },

    messagesView: {
        flexDirection: 'row'
    },

    logo: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FF8047'
    },

    icon: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1
    }
}

const MatchOptions = ({onBack, onAdvance}) =>
    <View style={matchOptionStyles.container}>
        <View style={matchOptionStyles.button}>
            <TouchableOpacity onPress={onBack}>
                <Image source={Back} style={matchOptionStyles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={matchOptionStyles.button}>
            <TouchableOpacity onPress={onAdvance}>
                <Image source={Skip} style={matchOptionStyles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={matchOptionStyles.button}>
            <TouchableOpacity onPress={onAdvance}>
                <Image source = {Match} style={matchOptionStyles.icon}/>
            </TouchableOpacity>
        </View>
    </View>

const matchOptionStyles = {
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFECDB',
        height: '15%',
        width: '100%',
        justifyContent: 'space-around'
    },

    button: {
        flexDirection: 'row'
    },

    icon: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1
    }
}

export default function Home({navigation}) {
  const [contentIndex, setContentIndex] = useState(0)


  const nextOffer = () => {
      if (contentIndex == InternshipPostings.length - 1) {
          setContentIndex(0)
      } else {
          setContentIndex(contentIndex + 1)
      }
  }

  const prevOffer = () => {
      if (contentIndex == 0) {
          setContentIndex(InternshipPostings.length - 1)
      } else {
          setContentIndex(contentIndex - 1)
      }
  }

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation}/>
      <JobCard content={InternshipPostings[contentIndex]}/>
      <MatchOptions onBack={prevOffer} onAdvance={nextOffer}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '7%',
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