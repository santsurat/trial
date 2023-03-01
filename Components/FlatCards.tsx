import React from "react";
import {View , Text, StyleSheet, ScrollView } from "react-native";

const FlatCards = () =>{
  return(
<View>
  <Text style={styles.headingText}>FlatCards</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
    <View style={[styles.card, styles.cardOne]}>
        <Text>Red</Text>
    </View>
    <View style={[styles.card, styles.cardTwo]}>
        <Text>Green</Text>
    </View>
    <View style={[styles.card, styles.cardThree]}>
        <Text>Blue</Text>
    </View>
    <View style={[styles.card, styles.cardFour]}>
        <Text>Violet</Text>
    </View>
    <View style={[styles.card, styles.cardFive]}>
        <Text>Yellow</Text>
    </View>
  </View>
</ScrollView>
</View>
  )
}
const styles=StyleSheet.create({
headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
   
},
container:{
flex:1,
flexDirection:"row",
padding:8
},
card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    borderRadius:5,
    margin:8
},
cardOne:{
    backgroundColor:"#c0392b"
},
cardTwo:{
    backgroundColor:"#50DBB4"
},
cardThree:{
    backgroundColor:"#5DA3FA"
},
cardFour:{
    backgroundColor:"#8e44ad"
},
cardFive:{
    backgroundColor:"#f1c40f"
},
})
export default FlatCards;