import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { FoodItem } from './food'


export function Trending(){

    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.56.1:3000/foods")
            const data = await response.json()
            console.log(data)
        }

        getFoods();
    }, [])

    return(
        <FlatList
            data={foods}
            renderItem={({item}) => <FoodItem/>}
            horizontal={true}
        />
    );
}