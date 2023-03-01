import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'SantSurat',
      status: 'Bad Boy ',
      imageUrl: 'https://media.licdn.com/dms/image/C5603AQGXDLFPcJwDqw/profile-displayphoto-shrink_800_800/0/1631545344009?e=2147483647&v=beta&t=j6-Wa4VMvEIROTSYrSHUJg4tQxwVKKshTtOSX5OZXEw',
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
        scrollEnabled={false}
      >{contacts.map( ({uid , name, status, imageUrl}) => (
        <View key={uid} style={styles.useCard}>
          <Image 
          source={{
            uri:imageUrl

          }}
          style={styles.userImage}
          />
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userStatus}>{status}</Text>
        </View>
      ))}</ScrollView> 
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{

  },
  useCard:{

  },
  userImage:{
    width:60,
    height:60,
    borderRadius:60/2
  },
  userName:{},
  userStatus:{},
})