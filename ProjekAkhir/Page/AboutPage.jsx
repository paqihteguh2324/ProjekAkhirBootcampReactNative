import { View, Text, StyleSheet, Image} from 'react-native'
import { Entypo, Octicons ,AntDesign,FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react'
import polban from './../assets/LogoPolban (1).png'

export default function AboutPage() {
  return (
    <View style={{flex:1,paddingTop:25, backgroundColor:'#A0A9FF'}}>
    <View style={{flexDirection:"row", paddingLeft:30, paddingTop:10, alignSelf:"flex-start", backgroundColor:"#020547", height:50, width:500}}>
    <Entypo name="info" size={24} color="white" />
    <Text style={styles.about}>About me</Text>
    </View>
    <View style={styles.group}>
            <Image style={styles.profile} source={require('./../assets/profil.png')}
            />
    <View>
    <Text style={styles.nama}>Paqih Teguh Maulana</Text>
    <Text style={styles.job}>Programmer</Text>
    </View>
    </View>
    <View style={styles.back}>
        <Octicons name="project" size={30} color="black" />
        <Text style={styles.nama}>Projek yang pernah saya kerjakan</Text>
    </View>
    <View style={styles.group}>
    <AntDesign name="github" size={24} color="black" />
    <Text style={{paddingLeft:10}}>paqihteguh2324</Text>
    </View>
    <View style={styles.back}>
    <AntDesign name="contacts" size={30} color="black" />
    <Text style={styles.kontak}>Contact</Text>
    </View>
    <View style={styles.group}>
    <AntDesign name="linkedin-square" size={24} color="black" />
    <Text style={styles.konper}>Paqih Teguh Maulana</Text>
    </View>
    <View style={styles.group}>
    <FontAwesome name="whatsapp" size={24} color="black" />
    <Text style={styles.konper}>085721937727</Text>
    </View>
    <View style={styles.group}>
    <AntDesign name="instagram" size={24} color="black" />
    <Text style={styles.konper}>Paqihteguh_23</Text>
    </View>
    <View style={styles.back}>
    <Ionicons name="school" size={30} color="black" />
        <Text style={styles.nama}>Kegiatan yang sedang dilakukan</Text>
    </View>
    <View>
    <Image style={{ marginLeft:15,height:91,width:75,alignSelf:"center", margin:10}} 
            source={{uri: 'https://rekreartive.com/wp-content/uploads/2018/10/Logo-Polban-Politeknik-Negeri-Bandung-Original-PNG.png.webp'}} />
    <Text style={{alignSelf:"center"}}>Mahasiswa Teknik Informatika</Text>
    <Text style={{alignSelf:"center"}}>Politeknik Negeri Bandung</Text>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
  header:{
      paddingLeft:40,
      height:50,
      width:50,
      marginTop:20,
  },
  about:{
      alignSelf:"center",
      fontSize:20,
      marginLeft:15,
      fontWeight:"bold",
      color:"white"
  },
  profile:{
      marginLeft:15,
      height:91,
      width:75,
  },
  group:{
      marginTop:30,
      flexDirection:"row",
      paddingLeft:20
  },
  nama:{
      fontSize:18,
      marginLeft:20,
      fontWeight:"bold"
  },
  job:{
      marginLeft:20,
      marginTop:5,
      fontSize:15,
  },projek:{
      marginLeft:20,
      height:53,
      width:51,
  },  isiprojek:{
      marginTop:10,
      alignSelf:"center"
  }, git:{
    
      height:53,
      width:51,
      alignSelf:"center"
  }, kontak:{
      marginLeft:20,
      fontSize:20,
      fontWeight:"bold"
  }, person:{
      
      height:34,
      width:34,
      marginLeft:50
  },konper:{
      marginTop:5,
      marginLeft:10,
      fontSize:15
  } ,back:{
    marginTop:30,
    flexDirection:"row",
    paddingLeft:15,
    backgroundColor:"#962995",
    height:40,
    paddingTop:5

},
})