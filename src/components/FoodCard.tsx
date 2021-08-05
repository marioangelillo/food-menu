import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    title: string;
}

export const FoodCard = ({ title }: Props ) => {
    return (
        <View style={ styles.cardStyle }>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        height: 200,
        width: '75%',
        backgroundColor: '#1A237E',
        marginVertical: 10,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 10
    }
})