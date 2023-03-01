import React from "react";
import {View , Text, StyleSheet,ScrollView }from "react-native";

const ElevatedCards = () =>{
return(
    <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView showsVerticalScrollIndicator={true}>
  <View style={styles.container}>
    <View style={[styles.card, styles.cardOne]}>
        <Text>Tap</Text>
    </View>
    <View style={[styles.card, styles.cardTwo]}>
        <Text>Me</Text>
    </View>
    <View style={[styles.card, styles.cardThree]}>
        <Text>to</Text>
    </View>
    <View style={[styles.card, styles.cardFour]}>
        <Text>Scrolll</Text>
    </View>
    <View style={[styles.card, styles.cardFive]}>
        <Text>More...</Text>
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
    flexDirection:"column",
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
        backgroundColor:"#CAD5E2"
    },
    cardTwo:{
        backgroundColor:"#FDA7DF"
    },
    cardThree:{
        backgroundColor:"#D980FA"
    },
    cardFour:{
        backgroundColor:"#1B1464"
    },
    cardFive:{
        backgroundColor:"#833471"
    },
    
})
export default ElevatedCards;