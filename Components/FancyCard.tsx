import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image style={styles.cardImage}
                    source={{
                        uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1oyWOjO2wlK9hVL2lzOgQ'
                    }}

                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                    <Text style={styles.cardDescription}>Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jaipur, India.</Text>
                    <Text style={styles.cardFooter}>12 min away</Text>
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
        height: 360,
        width: 350,
        borderRadius: 6,
        marginHorizontal: 5,
        marginVertical: 12,
    },
    cardElevated: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "#000000",
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel: {
        color: "#000000",
        fontSize:14,
        marginBottom:6
    },
    cardDescription: {
        color: "#E6425E",
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter: {
        color: "#000000"
    },
})
export default FancyCard;