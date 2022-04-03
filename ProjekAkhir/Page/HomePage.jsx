import { StyleSheet, Text, View, ImageBackground, TextInput, Button, FlatList, TouchableOpacity} from 'react-native'
import React,{useState, useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import head from './../assets/head.jpeg';
import axios from 'axios';


function HomePage({navigation}) {
  const [Judul, setJudul] = useState('run');
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);

  const fetchMovie = async() =>{
    const iniMovie = await axios.get(`https://www.omdbapi.com/?s=${Judul}&apikey=8df42f3c&type=movie`).then(res => res.data);
    const iniSeries = await axios.get(`https://www.omdbapi.com/?s=${Judul}&apikey=8df42f3c&type=series`).then(res => res.data);
    const hasilMovie = iniMovie.Search
    const hasilSeries = iniSeries.Search
    setSeries(hasilSeries)
    setMovie(hasilMovie);
}

  useEffect(() =>{
  fetchMovie();
  },[]);
  return (
    <View style={styles.container}>
    <ImageBackground source={head} style={{height:80}}/>
    <View>
      <View style={styles.hijikeun}>
      <TextInput style={styles.search}
      placeholder='judul'
      value={Judul}
      onChangeText={setJudul}
      />
      <View style={styles.tombol}>
        <TouchableOpacity style={styles.tombol}
        onPress={() => fetchMovie()}
      >
        <Text style={{color:'#ffffff'}}>Search</Text>
      </TouchableOpacity>
      </View>      
      </View>
      <View style={styles.BarType}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>Movies</Text>
      </View>
      <View style={styles.content}>
            <FlatList
            data={movie}
            horizontal={true}
            initialNumToRender={2}
            keyExtractor={(item) => item.imdbID}
            renderItem={({item}) => {
              return (
                <View style={styles.isiflatlist}>
                  <TouchableOpacity  onPress={()=>navigation.navigate('DetailPage', {'imdbID': item.imdbID})}>
                    <ImageBackground source={{uri:item.Poster}} style={{height:129, width:90, alignSelf:"center"}}>
                   </ImageBackground>
                   <Text style={{ textAlign:"center", fontWeight:"bold"}}
                   >{item.Title}({item.Year})
                   </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  </TouchableOpacity>
                </View>
              );
            }}
            />
      </View>
      <View style={styles.BarType}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>Series</Text>
      </View>
      <View style={styles.content}>
      <FlatList
            data={series}
            horizontal={true}
            initialNumToRender={2}
            keyExtractor={(item) => item.imdbID}
            renderItem={({item}) => {
              return (
                <View style={styles.isiflatlist}>
                  <TouchableOpacity  onPress={()=>navigation.navigate('DetailPage', {'imdbID': item.imdbID})}>
                    <ImageBackground source={{uri:item.Poster}} style={{height:129, width:90, alignSelf:"center"}}>
                   </ImageBackground>
                   <Text style={{ textAlign:"center", fontWeight:"bold"}}
                   >{item.Title}({item.Year})
                   </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  </TouchableOpacity>
                </View>
              );
            }}
            />
      </View>
    </View>
    </View>
    
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    paddingTop:25,
    flex:1,
    backgroundColor:'#A0A9FF'
  },
  search:{
    borderWidth:1,
    borderRadius:15,
    height:40,
    width:260,
    paddingHorizontal:20
  },
  hijikeun:{
    flexDirection:"row",
    margin:20,
  },
  tombol:{
    height: 40,
    marginLeft:20,
    overflow:"hidden",
    borderRadius:15,
    backgroundColor:'#020547',
    width : 80,
    alignContent:"center",
    justifyContent:"center"
  },
  BarType:{
    height:40,
    backgroundColor:'#020547',
    paddingLeft:40,
    paddingVertical:5,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingRight:20,
  },
  content:{
    backgroundColor:"#A0A9FF"
    ,padding:10
  },
  isiflatlist:{
    height:190,
    width: 100,
    backgroundColor:'#962995',
    margin:5,
    padding: 5,
    overflow:"hidden"
  },
})