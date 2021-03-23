import React, {useRef, useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-swiper';
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

const MatchOptions = ({onBack, onSkip, onMatch}) =>
    <View style={matchOptionStyles.container}>
        <View style={matchOptionStyles.button}>
            <TouchableOpacity onPress={onBack}>
                <Image source={Back} style={matchOptionStyles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={matchOptionStyles.button}>
            <TouchableOpacity onPress={onSkip}>
                <Image source={Skip} style={matchOptionStyles.icon}/>
            </TouchableOpacity>
        </View>
        <View style={matchOptionStyles.button}>
            <TouchableOpacity onPress={onMatch}>
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
  const swiperRef = useRef(null)
  const [index, setIndex] = useState(0)

  const back = () => {
    if (index > 0) {
        swiperRef.current.scrollBy(-1)
        setIndex(index - 1)
    }
  }

  const skip = () => {
    if (index < InternshipPostings.length - 1) {
        swiperRef.current.scrollBy(1)
        setIndex(index + 1)
    }
  }

  const match = () => {
    InternshipPostings[index].matched = true
    skip()
  }

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation}/>
        <Swiper ref={swiperRef} showsButtons={false} showsPagination={false} loop={false}>
            {InternshipPostings.map(posting =>
                <JobCard content={posting} key={posting.name}/>)}
        </Swiper>
        <MatchOptions onBack={back} onSkip={skip} onMatch={match}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '7%',
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