import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/global'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>COVID-19</Text>
            <Text style={[styles.subtitle, globalStyles.text]}>Essential Toolkit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'left',
        fontSize: 50,
        color: '#4A4A4A',
        fontFamily: 'circular-std',
    },
    subtitle: {
        textAlign: 'left',
        fontSize: 18,
        color: '#4A4A4A'
    }
})