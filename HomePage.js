import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomePage = () => (
    <Text style={styles.text}>Home</Text>
);

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomePage;