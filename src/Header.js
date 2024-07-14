import React from "react";
import { useState, useEffect } from "react";
import {Text, View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import
MaterialIcons
from 'react-native-vector-icons/MaterialIcons';
function Header() {
 const [headerList, setHeaderList] = useState(["Basic","Chart","KP","Ashtakvarga","Dasha","Report","Basic","Chart","KP","Ashtakvarga","Dasha","Report"])
  return (
    <View style={styles.header}>
      <View style={styles.viewHead1}>
        <TouchableOpacity >
        <MaterialIcons
              name={'arrow-back-ios'}
              size={16}
              color={"white"}
            />
        </TouchableOpacity>
        <Text style={styles.viewTextHeader}>Kundli</Text>
      </View>
      <FlatList
        horizontal
        data={headerList}
        renderItem={({ item, index }) => (
          <TouchableOpacity   onPress={() => {  }}>
            <Text style={styles.viewText1}>{item}  |</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
 );
}

export default Header;

var styles = StyleSheet.create({
  header: {
    width :"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
        padding: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
        height: 100,

  },
  viewHead1: {
    flexDirection : 'row',
    alignItems : 'center',
    height :50,
  },
  viewTextHeader: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginLeft :5,
    color: '#ffffff',
  },
  viewText1: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginLeft :5,marginRight :5,
    color: '#ffffff',
  },
})
