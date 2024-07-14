import React from "react";
import { useState, useEffect } from "react";
import {Text, View,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import AnimatedGradient from "./AnimatedGradient";
import Header from "./Header";
import LinearGradient from "react-native-linear-gradient";
function Home() {
  const [planetList, setPlanetList] = useState(["Sign","Nakshatra",])
  const [kundiList, setKundiList] = useState(["General","Planetary","Yoga"])
  const [headerList, setHeaderList] = useState(["Planet","Sign","Sign Lord","Degree", "House"])
  const [itemList, setItemList] = useState([])
  const [planetType, setPlanetType] = useState("Nakshatra")
  const [kundiType, setKundiType] = useState("General")
  useEffect(() => {
     const newArray = []
    for(let i=0; i<10; i++){
      newArray.push({
        planetName : "Ascendant",
        signName: "Pisces",
        signLordName:"Jupiter",
        dgreeName: "131324",
         houseName : "1"
       }) 
    }
    setItemList(newArray)
  },[]);
  return (
    <AnimatedGradient>
    <Header ></Header>
    <ScrollView nestedScrollEnabled style={styles.viewScroll} showsVerticalScrollIndicator={false} > 
      <View style={{paddingBottom :200}}>
    <Image
        style={styles.kundliIamge}
        source={require('../assets/images.png')}
      />
      <Text style={styles.viewText1}>Planets</Text>
      <FlatList
        horizontal
        style={styles.layoutView1} 
        data={planetList}
        renderItem={({ item, index }) => (
          <TouchableOpacity  onPress={() => {  setPlanetType(item)}}>
          {planetType == item  && (  <LinearGradient  colors={['#70E1F5', '#FFFFFF', '#FFD194']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.itemGradient}>
            <Text style={styles.viewText}>
              {item}
            </Text>
          </LinearGradient>)}
          {planetType != item  && (<Text style={styles.viewTextList1}>{item}</Text>)}
            
          </TouchableOpacity>
        )}
      ></FlatList>
       <View style={styles.listHeader}>
       {headerList.map((item,index )=>  <View  style={ index == (headerList.length-1) ? [styles.listTitle,{ borderRightWidth : 0}] : styles.listTitle } >
                <Text style={[styles.viewText,{color : 'white'}]}>{item}</Text>
         </View>)}
       </View>
       <LinearGradient  colors={['#232c22', '#3f3f26', '#6f5c2c']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.listItems}>
       <FlatList
        data={itemList}
        renderItem={({ item, index }) => (
         <View style={{flexDirection : 'row'}}>
          <View style={[styles.listTitle,{marginTop : 0}]} >
          <Text style={[styles.viewText,{color : 'white'}]}>{item.planetName}</Text>
          </View>
          <View style={[styles.listTitle,{marginTop : 0}]} >
          <Text style={[styles.viewText,{color : 'white'}]}>{item.planetName}</Text>
          </View>
          <View style={[styles.listTitle,{marginTop : 0}]} >
          <Text style={[styles.viewText,{color : 'white'}]}>{item.planetName}</Text>
          </View>
          <View style={[styles.listTitle,{marginTop : 0}]} >
          <Text style={[styles.viewText,{color : 'white'}]}>{item.planetName}</Text>
          </View>
          <View style={[styles.listTitle,{marginTop : 0,borderRightWidth : 0}]} >
          <Text style={[styles.viewText,{color : 'white'}]}>{item.planetName}</Text>
          </View>
         </View>
        )}
      ></FlatList>
      </LinearGradient>
      <Text style={[styles.viewText1,{marginTop :15}]}>Understanding your Kundli</Text>
      <FlatList
        horizontal
        style={styles.layoutView1} 
        data={kundiList}
        renderItem={({ item, index }) => (
          <TouchableOpacity  onPress={() => {  setKundiType(item)}}>
          {kundiType == item  && (  <LinearGradient  colors={['#70E1F5', '#FFFFFF', '#FFD194']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.itemGradient}>
            <Text style={styles.viewText}>
              {item}
            </Text>
          </LinearGradient>)}
          {kundiType != item  && (<Text style={styles.viewTextList1}>{item}</Text>)}
            
          </TouchableOpacity>
        )}
      ></FlatList>
      <LinearGradient  colors={['#232c22', '#3f3f26', '#6f5c2c']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.contentView}>
      <Text style={[styles.viewText1,{marginLeft :0}]}>Description</Text>
      <Text style={[styles.viewText,{marginTop :5,marginLeft :0,color : 'white'}]}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </LinearGradient>
      <LinearGradient  colors={['#232c22', '#3f3f26', '#6f5c2c']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.contentView}>
      <Text style={[styles.viewText1,{marginLeft :0}]}>Personality</Text>
      <Text style={[styles.viewText,{marginTop :5,marginLeft :0,color : 'white'}]}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </LinearGradient>
      <LinearGradient  colors={['#232c22', '#3f3f26', '#6f5c2c']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.contentView}>
      <Text style={[styles.viewText1,{marginLeft :0}]}>Career</Text>
      <Text style={[styles.viewText,{marginTop :5,marginLeft :0,color : 'white'}]}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </LinearGradient>
      <LinearGradient  colors={['#232c22', '#3f3f26', '#6f5c2c']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.contentView}>
      <Text style={[styles.viewText1,{marginLeft :0}]}>Health</Text>
      <Text style={[styles.viewText,{marginTop :5,marginLeft :0,color : 'white'}]}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </LinearGradient>
       </View>
      </ScrollView>
</AnimatedGradient>
 );
}

export default Home;

var styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  viewScroll: {
    width :"100%",
    height :"100%",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  kundliIamge: {
     width :"100%",
     height :300,
     alignSelf :'center',
     resizeMode: 'contain',
  },
  layoutView1: {
    marginTop:10,
    marginLeft :15,
    marginBottom : 10,
  },
  listHeader: {
    flexDirection : 'row',
    width :"95%",
    alignSelf : 'center',
        borderTopLeftRadius:15,
    borderTopRightRadius:15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
        height: 50,
  },
  listItems: {
    width :"95%",
    alignSelf : 'center',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
  },
  contentView: {
    width :"95%",
    alignSelf : 'center',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    padding:15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
  },
  listTitle: {
    width :"20%",
    justifyContent : 'center',
    alignItems : 'center',
    marginTop:5,
    borderRightWidth:.2,borderRightColor : "white",
    height: 50,
    fontSize: 12,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
  },
  viewText1: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    marginLeft :15,
    color: '#ffffff',
  },
  viewText: {
    fontSize: 12,
    fontFamily: 'Gill Sans',
    color: '#000000',
  },
  
  viewTextList1: {
    fontSize: 12,
    borderRadius :20,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:14,
    paddingRight:14,
    marginRight :16,
    borderColor :'white',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    borderWidth :1,
    color: '#ffffff',
  },
  itemGradient: {
    borderRadius :20,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:14,
    paddingRight:14,
    marginRight :16,
    textAlign: 'center',
    borderWidth :1,
    justifyContent : 'center',
    alignItems : 'center', 
  },
 
})
