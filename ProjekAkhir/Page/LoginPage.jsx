import { View, Text,KeyboardAvoidingView,Keyboard, ImageBackground, StyleSheet, TextInput, Button, TouchableOpacity,  TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import background from './../assets/backlogin.jpg'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginPage({navigation}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
const submit = () =>{
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // console.log(user.email)
      navigation.navigate('RouteBottom');
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
  });
}
  return (
  
    <ImageBackground source={background} style={{flex:1}}>
   
       <View style={styles.container}>
          <Text style={styles.judul}>Login</Text>
          {/* <KeyboardAvoidingView
            behavior="position"
            style={styles.container}>   */}
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
            <View style={styles.login}>
              <TouchableOpacity 
               style={{backgroundColor:"#15024E", height:35}}
              onPress={()=>submit()}
              ><Text style={{fontSize:20, color:"white", alignSelf:"center", paddingTop:2, borderRadius:15}}>Login</Text>
              </TouchableOpacity>
              </View>
              {/* </KeyboardAvoidingView> */}
                  <View style={{alignSelf:'center', flexDirection:"row", bottom:100, position:"absolute"}}>
                    <Text>Don't Have Account ?</Text>
                    <TouchableOpacity><Text style={styles.req}
                    onPress={() => navigation.navigate(`RegisterPage`)}> Register</Text></TouchableOpacity>
                  </View>
              </View>
    </ImageBackground>
   
  )
}
const styles = StyleSheet.create({
    judul:{
      fontSize:40,
      fontWeight:"bold",
      color:"white",
      marginLeft:180,
      marginTop:200,
    },
    textInput:{
      borderWidth:1,
      borderColor:"#97BFB4",
      height:46,
      width:277,
      alignSelf:"center",
      borderRadius:15,
      backgroundColor:"#F5EEDC",
      bottom:270,   
      paddingHorizontal:15,
      position:"absolute"
    },
    container:{
      flex:1
    },
    login:{
      height:46,
      width:277,
      alignSelf:"center",
      borderRadius:15,
      bottom:130,
      position:"absolute"
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
      bottom:180,
      marginBottom:20,
      paddingHorizontal:15,
      position:"absolute"
    }
})