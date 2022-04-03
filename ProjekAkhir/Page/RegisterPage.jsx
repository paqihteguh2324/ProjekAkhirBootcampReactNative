import { View, Text, ImageBackground, StyleSheet, TextInput,  TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import background from './../assets/backlogin.jpg'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export default function RetgisterPage({navigation}) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");

const register = () => {
  const auth = getAuth();
 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {displayName:username})
  .then(function() {
      console.log(user.displayName)
      alert('akun sudah di daftarkan silakan masuk ke menu login');
    // Update successful.
 }).catch(function(error) { 
   console.log(error)
   // An error happened.
 });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    if(errorCode == 'auth/invalid-email'){
      alert('invalid Email')
    }else if(errorCode == 'auth/wrong-password'){
      alert('invalid Password')
    }else if(errorCode=='auth/network-request-failed'){
      alert('jaringan anda buruk bro')
    }else if(errorCode == 'auth/too-many-requests'){
      alert('Terlalu banyak upaya masuk')
    }else{
    alert(errorCode);
    }
    // ..
  })


}
  return (
    
        <ImageBackground source={background} style={{flex:1, resizeMode: 'cover',}}>
          <View style={styles.container}>
          <Text style={styles.judul}>Register</Text> 
          <TextInput style={styles.textuser} 
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
            />
          <TextInput style={styles.textInput} 
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
            />
             <TextInput style={styles.pwdinput}
             placeholder='Password' 
             value={password}
             onChangeText={setPassword}
            />
            
            <View style={styles.pwd}>
              <TouchableOpacity style={{backgroundColor:"#15024E", height:35}}
              onPress={()=>register()}
              >
                <Text style={{fontSize:20, color:"white", alignSelf:"center", paddingTop:5}}>Register</Text>
              </TouchableOpacity>
              </View>
              <View style={{alignSelf:"center", bottom:105, position:"absolute"}}>
                <Text>Have Already Account ?</Text>
              </View>
                <View style={styles.login}>
                <TouchableOpacity
                style={{backgroundColor:'#962995', height:35}}
                onPress={() => navigation.navigate(`LoginPage`)}><Text style={{fontSize:20, color:"white", alignSelf:"center", paddingTop:2, borderRadius:15}}>Login</Text></TouchableOpacity>
                </View>
              </View>
        </ImageBackground>
   
  )
}const styles = StyleSheet.create({
  judul:{
    fontSize:40,
    fontWeight:"bold",
    color:"white",
    marginLeft:180,
    marginTop:250,
  },
   textuser:{
    borderWidth:1,
    borderColor:"#97BFB4",
    height:46,
    width:277,
    alignSelf:"center",
    borderRadius:15,
    backgroundColor:"#F5EEDC",
    bottom:310,
    position:"absolute",
    paddingHorizontal:15,
  },
  textInput:{
    borderWidth:1,
    borderColor:"#97BFB4",
    height:46,
    width:277,
    alignSelf:"center",
    borderRadius:15,
    backgroundColor:"#F5EEDC",
    bottom:250,
    position:"absolute",
    paddingHorizontal:15,
  },
  container:{
    flex:1
  },
  login:{
    height:46,
    width:277,
    alignSelf:"center",
    borderRadius:15,
    bottom:40,
    position:"absolute",
  },pwd:{
    height:46,
    width:277,
    alignSelf:"center",
    borderRadius:15,
    bottom:130,
    position:"absolute",
  },
  req:{
    color:"#0000ff"
  },
  pwdinput:{
    borderWidth:1,
    borderColor:"#97BFB4",
    height:46,
    width:277,
    alignSelf:"center",
    borderRadius:15,
    backgroundColor:"#F5EEDC",
    bottom:190,
    position:"absolute",
    paddingHorizontal:15,
  }
})