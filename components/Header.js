import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>COVID-19</Text>
            <Text style={styles.subtitle}>Essential Toolkit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // height: 200,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'left',
        fontSize: 50,
        color: '#4A4A4A',
        fontFamily: 'nunito-regular'
    },
    subtitle: {
        textAlign: 'left',
        fontSize: 20,
        color: '#4A4A4A',
    }
})