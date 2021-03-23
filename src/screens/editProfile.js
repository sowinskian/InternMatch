import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import backButton from '../../assets/BackButton.png';

export default function editProfile(props) {
  const { navigation } = props

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
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 23}}>Name:  </Text><TextInput style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '7%', width: '70%', padding: '5%', marginBottom: 10, fontSize: 15, position: 'absolute', left: 72, top: 15}}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 23}}>GPA:  </Text><TextInput style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '7%', width: '70%', padding: '5%', marginBottom: 10, fontSize: 15, position: 'absolute', left: 62, top: 69 }}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 23}}>Experience: </Text><TextInput style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '7%', width: '70%', padding: '5%', marginBottom: 10, fontSize: 15, position: 'absolute', left: 110, top: 125 }}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 23}}>Relevant Coursework: </Text><TextInput style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '7%', width: '47%', padding: '5%', marginBottom: 10, fontSize: 15, position: 'absolute', left: 180, top: 180 }}></TextInput>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 13, paddingBottom: 23}}>Personal Statement: </Text><TextInput style={{ backgroundColor: '#FFFFFF', borderColor: '#FF8047', borderWidth: 3, borderRadius: 20, height: '7%', width: '50%', padding: '5%', marginBottom: 10, fontSize: 15, position: 'absolute', left: 170, top: 230  }}></TextInput>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.saveButton} >
            <Text style={styles.saveButtonText}>Save</Text>
         </TouchableOpacity>
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
    height: '82%',
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
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    borderRadius: 15,
    padding: 10,
    margin: 5,
    position: 'absolute',
    top: 350,
    right: 140
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
})