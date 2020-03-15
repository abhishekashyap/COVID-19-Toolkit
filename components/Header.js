import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>COVID-19: Essential Toolkit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#4A4A4A',
    }
})