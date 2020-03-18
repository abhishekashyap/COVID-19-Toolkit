import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Icon imports
import Prevention from '../assets/icons/prevention.png'
import Symptom from '../assets/icons/symptom.png'
import HowItSpreads from '../assets/icons/agreement.png'
import Treatment from '../assets/icons/hospital.png'
import WorldMap from '../assets/icons/world.png'

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={[styles.menuItem, styles.menuItem1]}>
                <Image source={Prevention} style={styles.icon} />
                <Text style={styles.itemTitle}>Prevention</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem2]}>
                <Image source={Symptom} style={styles.icon} />
                <Text style={styles.itemTitle}>Symptoms</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem3]}>
                <Image source={Treatment} style={styles.icon} />
                <Text style={styles.itemTitle}>Treatment</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem4]}>
                <Image source={HowItSpreads} style={styles.icon} />
                <Text style={styles.itemTitle}>How it spreads</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem5]}>
                <Image source={WorldMap} style={styles.icon} />
                <Text style={styles.itemTitle}>World Map</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: 500,
        backgroundColor: '#fff'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 80,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10
    },
    itemTitle: {
        fontSize: 25,
        paddingLeft: 15,
        color: '#fff',
    },
    icon: {
        height: 50,
        width: 50,
    },
    menuItem1: {
        backgroundColor: '#1ABC9C'
    },
    menuItem2: {
        backgroundColor: '#D54E4E'
    },
    menuItem3: {
        backgroundColor: '#34495E'
    },
    menuItem4: {
        backgroundColor: '#9B59B6'
    },
    menuItem5: {
        backgroundColor: '#2ECC71'
    },
})