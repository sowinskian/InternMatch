import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { onChange } from 'react-native-reanimated';
import loginButton from '../../assets/loginButton.png';

const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human'
}

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setvalidEmail] = useState(true);
  const [validPass, setvalidPass] = useState(true);

  global.name = "Zachary Jackson"
    global.standing = "Junior at the University of Florida";
    global.GPA = "3.60/4.00";
    global.experience = "C,C++,Java,MATLAB,Microcontrollers,Circuits,DSP,Embedded Systems";
    global.courses = "What is the good life, Data Structures, Digital Logic, Human-Computer Interaction";
    global.statement = "I just want a job please..";

  function loginPress() {
    if (email.indexOf('@') == -1 || email.indexOf(".") == -1 || email.indexOf('@') > email.indexOf('.')) {
      setvalidEmail(false)
    }
    else {
      setvalidEmail(true)
      if (password != "password") {
        setvalidPass(false)
      }
      else{
        setEmail('')
        setPassword('')
        navigation.navigate('Home')
      }
    }
  }
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={{ height: '30%', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
        <View style={{ width: '60%', height: "100%", alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 100, fontWeight: 'bold', color: '#FF8047' }}>iM</Text>
        </View>
      </View>
      <View style={{ height: '30%', width: '80%', justifyContent: "space-between", textAlign: 'left' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000000', textAlign: 'left', alignSelf: 'flex-start', paddingLeft: '5%' }}> Email</Text>
        <TextInput autoCompleteType='email' style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '25%', padding: '5%', fontSize: 20 }} onChangeText={text => setEmail(text)}></TextInput>
        {
          validEmail === false &&
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red', textAlign: 'left', alignSelf: 'flex-start', paddingLeft: '5%' }}>Please use a valid email address</Text>
        }
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000000', paddingTop: '5%', paddingLeft: '5%' }}>Password</Text>
        <TextInput autoCompleteType='password' secureTextEntry={true} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '25%', padding: '5%', fontSize: 20 }} onChangeText={text => setPassword(text)}></TextInput>
        {
          validPass === false &&
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red', textAlign: 'left', alignSelf: 'flex-start', paddingLeft: '5%' }}>Invalid email/password combination</Text>
        }
      </View>
      <TouchableOpacity onPress={() => loginPress()} style={{ width: '47%', height: '10%', marginTop: '10%', alignItems: 'center' }}>
        <Image
          source={loginButton}
          style={{ width: '100%', height: "100%" }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF8047', textDecorationLine: 'underline' }}>or, sign up!</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
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

