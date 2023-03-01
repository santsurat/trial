import React from "react";
import {SafeAreaView , Text, ScrollView, StyleSheet } from "react-native";
import ActionCard from "./Components/ActionCard";
import ContactList from "./Components/ContactList";
import ElevatedCards from "./Components/ElevatedCards";
import FancyCard from "./Components/FancyCard";
import FlatCards from "./Components/FlatCards";

const App = () =>{
  return(
<SafeAreaView>
  <ScrollView>
    {/* <Text style={styles.headingText}>
    App
    </Text> */}
    <FlatCards />
    <ElevatedCards />
    <FancyCard />
    <ActionCard />
    <ContactList />
  </ScrollView>
</SafeAreaView>
  )
}
// const styles=StyleSheet.create({
//   headingText:{
//     fontSize:24,
//     fontWeight:'bold',
//     paddingHorizontal:8
// }
// })
export default App;