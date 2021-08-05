import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FoodCard } from '../components/FoodCard';
import { HeaderDates } from '../components/HeaderDates';
import { useDate } from '../hooks/useDate';

export const CalendarMenuScreen = () => {

    const { days, date } = useDate();

    console.log(days)

    return (
        <ScrollView>
            <HeaderDates />
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <FoodCard title="Breakfast" />     
                <FoodCard title="Lunch" />
                <FoodCard title="Dinner" />      
            </View>
        </ScrollView>
    )
}
