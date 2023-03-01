import { StyleSheet, Text, View, Linking, Image, TouchableOpacity,  } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in javascript 21 - ES12</Text>
                </View>
                <View>
                <Image
                    source={{
                        uri: 'https://lh3.googleusercontent.com/a/AEdFTp5owuEgAOBbEXYlH5WSWeuu5EZ-GVWG4sH_NiI6hr8'
                    }}
                    style={styles.cardImage}
                ></Image>
</View>
                <View >
                    <Text style={styles.bodyContainer}>
                        Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    
                    <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.socialLinks}>Read More..</Text>
                    </TouchableOpacity>

                    <View style={styles.footerContainer}>
                        
                        <TouchableOpacity onPress={() => openWebsite('https://in.linkedin.com/in/sant-surat-1578641b1?original_referer=https%3A%2F%2Fwww.google.com%2F')}>
                        <Text style={styles.socialLinks}>Follow Me..</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 390,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 4
    },
    elevatedCard: {
        backgroundColor: "#E07C24",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1

        },
        shadowColor: '#333',
        shadowOpacity: 0.4

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190,
        position: 'relative'
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 8,

    },
    socialLinks: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4
    },

})