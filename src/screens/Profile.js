import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native'
import backButton from '../../assets/BackButton.png';
import aPicture from '../../assets/a.png';
import cap from '../../assets/cap.png';

export default function Profile(props) {
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
        <Text style={{fontSize: 35, fontWeight: 'bold', paddingTop: 13}}>Profile</Text>
        </View>
        <View style={{ width: '15%', height: "100%"}}></View>
      </View>

      <View style={styles.card}>
        <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 10}}>Zachary Jackson</Text>

        <Image source={cap} style={{ width: '6%', height: "3%", position: 'absolute', left: 20, top: 65}}/>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize: 12, fontWeight: 'bold', paddingBottom: 10}}>         Junior at the University of Florida</Text>
        </View>

        <Image source={aPicture} style={{ width: '5.3%', height: "2.6%", position: 'absolute', left: 22, top: 90}}/>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>         3.60/4.00 GPA</Text>

        <Text style={{color: 'grey', fontSize: 25, marginBottom: 10}}>_______________________</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Resume</Text>
        
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Zachary_Jackson_Resume_S</Text>

        <View style={{position: 'absolute', top: 170, right: 35}}>
          <Button
            title="View"
            color = "grey"
          />
        </View>  

        <Text style={{fontSize: 12, fontWeight: 'bold', paddingBottom: 10}}>pring_2021.pdf</Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Experience</Text>

        <View style={{height: 38, width: 50, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 250, left: 20}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>C</Text>
        </View>

        <View style={{height: 38, width: 65, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 250, left: 80}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>C++</Text>
        </View>

        <View style={{height: 38, width: 65, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 250, left: 155}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Java</Text>
        </View>

        <View style={{height: 38, width: 90, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 250, left: 230}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>MATLAB</Text>
        </View>

        <View style={{height: 38, width: 130, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 300, left: 20}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Microcontrollers</Text>
        </View>

        <View style={{height: 38, width: 80, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 300, left: 160}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Circuits</Text>
        </View>

        <View style={{height: 38, width: 60, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 300, left: 250}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>DSP</Text>
        </View>

        <View style={{height: 38, width: 160, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 350, left: 20}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Embedded Systems</Text>
        </View>



        <View style={{height: 38, width: 140, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 450, left: 20}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Data Structures</Text>
        </View>

        <View style={{height: 38, width: 120, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 450, left: 170}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Digital Logic</Text>
        </View>

        <View style={{height: 38, width: 220, backgroundColor: '#FFC997', position: 'absolute', borderRadius: 20, position: 'absolute', top: 500, left: 20}}>
          <Text style={{textAlign: 'center', justifyContent: 'center', paddingTop: 10}}>Human Computer Interaction</Text>
        </View>

        <Text style={{color: 'grey', fontSize: 25, marginBottom: 10, paddingTop: 135}}>_______________________</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Relevant Coursework</Text>
        <Text style={{color: 'grey', fontSize: 25, marginBottom: 10, paddingTop: 90}}>_______________________</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Personal Statement</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>I'm interested in electrical and computer engineering for aeronautics. I want to build the systems that power spacecraft!</Text>

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
})
