import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import backButton from '../../assets/BackButton.png';

export default function editProfile(props) {
  const { navigation } = props
  const [name, setName] = useState("");
  const [standing, setStanding] = useState("");
  const [GPA, setGPA] = useState("");
  const [experience, setExperience] = useState("");
  const [courses, setCourses] = useState("");
  const [statement, setStatement] = useState("");

  function saveVals()
  {
    if(name != "")
    global.name = name;
    if(standing != "")
    global.standing = standing;
    if(GPA != "")
    global.GPA = GPA;
    if(experience != "")
    global.experience = experience;
    if(courses != "")
    global.courses = courses;
    if(statement != "")
    global.statement = statement;
    navigation.navigate('Profile')
  }

  // useEffect(() => {
  //   if(route.params.messageArray !== undefined) {
  //     for(let i = 0; i < route.params.messageArray.length;i++) {
  //       setName(global.name)
  //       setStanding(global.standing)
  //     }
  //   }
  // }, [navigation])

  return (
    <View style={styles.container}>
      <View style={{ height: '6%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ width: '12%', height: "90%"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width: '100%', height: "100%" }}>
          <Image
            source={backButton}
            style={{ width: '100%', height: "100%" }}
          />
        </TouchableOpacity>
        </View>
        <View style={{ width: '60%', height: "100%", justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 35, fontWeight: 'bold', paddingTop: 13}}>Edit Profile</Text>
        </View>
        <View style={{ width: '15%', height: "100%"}}></View>
      </View>

      <View style={styles.card}>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 10}}>Name:  </Text>
        <TextInput defaultValue = {global.name} onChangeText={text => setName(text)} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, paddingLeft: '3%', paddingRight: '3%', height: '7%', width: '100%', fontSize: 15}}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 10}}>School and Grade:  </Text>
        <TextInput defaultValue = {global.standing} onChangeText={text => setStanding(text)} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, paddingLeft: '3%', paddingRight: '3%', height: '7%', width: '100%', fontSize: 15}}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 10}}>GPA:  </Text>
        <TextInput defaultValue = {global.GPA} onChangeText={text => setGPA(text)} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, paddingLeft: '3%', paddingRight: '3%', height: '7%', width: '100%', fontSize: 15}}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 10}}>Experience: </Text>
        <TextInput value = {global.experience} defaultValue = {global.experience} onChangeText={text => setExperience(text)} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, paddingLeft: '3%', paddingRight: '3%', height: '7%', width: '100%', fontSize: 15}}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 10}}>Relevant Coursework: </Text>
        <TextInput defaultValue = {global.courses} onChangeText={text => setCourses(text)} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, paddingLeft: '3%', paddingRight: '3%', height: '7%', width: '100%', fontSize: 15}}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 10}}>Personal Statement: </Text>
        <TextInput defaultValue = {global.statement} onChangeText={text => setStatement(text)} style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, paddingLeft: '3%', paddingRight: '3%', height: '7%', width: '100%', fontSize: 15}}></TextInput>
     </View>
     <TouchableOpacity onPress={() => saveVals()} style={styles.saveButton} >
            <Text style={styles.saveButtonText}>Save</Text>
         </TouchableOpacity>
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
    height: '62%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    margin: "7%",
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  },
  rectangle: {
    height: 38,
    width: 128,
    backgroundColor: '#FFC997',
    position: 'absolute', 
    borderRadius: 20
  },
  saveButton: {
    borderWidth: 1,
    width: "50%",
    borderColor: '#FF8047',
    backgroundColor: '#FF8047',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
})