import React from 'react';

import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useDate } from '../hooks/useDate';
import { DateInterface } from '../interfaces/DateInterface';

interface MenuItem {
    name: string;
    day: number;
}

const widthScreen = Dimensions.get('screen').width;

export const HeaderDates = () => {

    const { date, days, month, year } = useDate();
    


    const renderDias = ( item: DateInterface ) => {
        return(
            <View style={{ marginHorizontal: 15 }}>
                <Text style={ styles.daysFont }>{ item.nameDay }</Text>
                <Text style={ styles.daysFont }>{ item.day }</Text>
            </View>
        )
    }

    return (
        <View style={ styles.headerStyle }>
            <View>
                <Text style={{
                    ...styles.daysFont,
                    marginBottom: 20
                }}>
                    { month }, { year }
                </Text>
                
                <Carousel 
                    data={ days }
                    renderItem={ ({ item }) => renderDias(item) }
                    sliderWidth={ widthScreen }
                    itemWidth={ 100 }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 180,
        width: '100%',
        paddingBottom: 10,
        marginBottom: 10,
        backgroundColor: '#1A237E',
        justifyContent: 'flex-end'
    },
    daysFont: {
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
})