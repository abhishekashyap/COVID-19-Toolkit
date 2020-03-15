import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={[styles.menuItem, styles.menuItem1]}>
                <Text style={styles.itemTitle}>Prevention</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem2]}>
                <Text style={styles.itemTitle}>Symptoms</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem3]}>
                <Text style={styles.itemTitle}>Treatment</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem4]}>
                <Text style={styles.itemTitle}>How it spreads</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItem5]}>
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
    itemTitle: {
        fontSize: 25,
        padding: 10,
        color: '#fff'
    },
    menuItem: {
        height: 80,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
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