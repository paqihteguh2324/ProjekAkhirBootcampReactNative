import { View, Text, StyleSheet, Image} from 'react-native'
import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function DetailPage(route) {

  const [detail, setDetail] = useState([]);
  
  const fetchMovie = async() =>{
    const iniMovie = await axios.get(`https://www.omdbapi.com/?i=${route.route.params.imdbID}&apikey=8df42f3c`).then(res => res.data);
    // console.log(iniMovie)
    setDetail(iniMovie);
}
  useEffect(() =>{
  fetchMovie();
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{color:"white", alignSelf:"center", fontSize:20, fontWeight:"bold"}}>{detail.Title}({detail.Year})</Text>
      </View>
      <Image source={{uri: detail.Poster}} style={{width:270, height:387, alignSelf:"center", margin:30}}/>
      <View style={styles.biasa}>
        <Text>Genre  : {detail.Genre}</Text>
        <Text>Actors : {detail.Actors}</Text>
      </View>
      <View style={styles.BarType}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:18,paddingTop:3}}>Deskripsi</Text>
      </View>
      <View style={{padding:5}}>
        <Text>{detail.Plot}</Text>
      </View>
      <View style={styles.BarType}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:18,paddingTop:3}}>Rating</Text>
      </View>
      <View style={{flexDirection:"row", marginHorizontal:5, overflow:"hidden", justifyContent:"space-around"}}>
        <View style={styles.rate}>
        <Text style={{alignSelf:"center", fontWeight:"bold"}}>Language</Text>
        <Text style={{alignSelf:"center"}}>{detail.Language}</Text>
        </View>
        <View style={{backgroundColor:"#962995", width:2, height: 90}}>
        </View>
        <View style={styles.rate}>
        <Text style={{alignSelf:"center",  fontWeight:"bold"}}>Duration</Text>
        <Text style={{alignSelf:"center"}}>{detail.Runtime}</Text>
        </View>
        <View style={{backgroundColor:"#962995", width:2, height: 90}}>
        </View>
        <View style={styles.rate}>
        <Text style={{alignSelf:"center",  fontWeight:"bold"}}>Rating</Text>
        <Text style={{alignSelf:"center"}}>{detail.imdbRating}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingTop:25,
      backgroundColor:"#A0A9FF"
  },
  header:{
    flexDirection:"row"
    ,height:50,
    backgroundColor:"#020547",
    justifyContent:"center"
  },
  biasa:{
    paddingHorizontal:20,
    paddingBottom: 10,
  },
  BarType:{
    height:40,
    backgroundColor:'#962995',
    paddingLeft:40,
    paddingVertical:5,
  },rate:{
    alignContent:"center",
    flex:1,
    padding:5
  }
})
