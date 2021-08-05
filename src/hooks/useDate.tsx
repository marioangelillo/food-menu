import { useState, useEffect } from 'react';
import { DateInterface } from '../interfaces/DateInterface';



export const useDate = () => {
    
    const date = new Date();
    const arrayNameDays: string[] = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
    const arrayNameMonths: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

    const month: string = arrayNameMonths[date.getMonth()];
    const year: number = date.getFullYear();

    const [days, setDays] = useState<DateInterface[]>([]);

    const getDatesArray = () => {
        let newArray: DateInterface[] = [];

        for (let i = 0; i < 8; i++) {
            let actualDay = (date.getDay() + i)
            newArray.push({
                day: date.getDate() + i,
                nameDay: (actualDay > 6 ) ? arrayNameDays[actualDay - 7] : arrayNameDays[actualDay]
            });   
        }
        setDays(newArray);
    }

    useEffect(() => {
        getDatesArray();
    }, [])

    return {
        date,
        days,
        month,
        year
    }
}
