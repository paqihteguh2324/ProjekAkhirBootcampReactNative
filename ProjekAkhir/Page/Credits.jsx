import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {AntDesign } from '@expo/vector-icons';

export default function Credits({navigation}) {
  const auth = getAuth();
 console.log(auth.currentUser.email);
 const data = auth.currentUser

  const logout = () =>{
    signOut(auth).then(() => {
      alert("Logout berhasil");
      console.log(auth);
     navigation.navigate('LoginPage');
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });

  }
 
  return (
    <View style={{flex:1, paddingTop:25, alignSelf:"center", backgroundColor:"#A0A9FF"}}>
    <View style={{backgroundColor: "#020547", height:60, alignItem:"center", paddingTop:13}}>
      <Text style={{color: "white", alignSelf:"center", fontSize:25}}>User Page</Text>
    </View>
    <View style={{margin:40, flexDirection:"row",  justifyContent:"space-evenly"}}>
    <AntDesign name="user" size={60} color="black" />
    <View style={{alignContent:"center"}}> 
      <Text style={{paddingHorizontal: 25, fontSize:25,  alignSelf:"center"}}>{data.displayName}</Text>
      <Text style={{paddingHorizontal: 25, paddingTop:10, fontSize:20,  alignSelf:"center"}}>{data.email}</Text>
    </View>
    <View>
    <TouchableOpacity style={styles.button} onPress={()=>logout()}>
          <Text style={{color:"white", alignSelf:"center", paddingTop:7, fontWeight:"bold"}}>Logout</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={{marginTop:300}}>
      <Text style={{alignSelf:"center", fontSize:20,}}>Thanks to :</Text>
    <Image source={require('./../assets/jcc.jpeg')} style={{height:60, width:200, margin:10, alignSelf:"center"}}/>
      <Image source={require('./../assets/Logosnbr.png') } style={{height:90, width:300, margin:10, alignSelf:"center"}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    alignSelf:"center",
    backgroundColor:962995,
    height:40,
    width:60,
    borderWidth:1,
    borderRadius:15,
    marginTop:16,
    marginLeft:3
  }
})