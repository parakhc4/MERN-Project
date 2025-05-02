import React from "react";
import {useParams} from 'react-router-dom';
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id : 'p1',
        title : 'Vought Towers',
        description : "Headquarters of TheSeven",
        imageUrl : 'https://images.squarespace-cdn.com/content/v1/52c9d908e4b0e87887310693/1603212596769-BYG7QIPLIEIVHJ5GA3NP/Screenshot%2B2020-10-20%2B09.19.26.jpg?format=1500w',
        address : 'Vought Tower, Toronto, CA',
        location : {
            lat : 40.74,
            lng: -152.03
        },
         creator : 'u1'
    },
    {
        id : 'p2',
        title : 'Vought Towers',
        description : "Headquarters of TheSeven",
        imageUrl : 'https://images.squarespace-cdn.com/content/v1/52c9d908e4b0e87887310693/1565967081148-BCQKKYYC6MTPLX9TGT98/Boys_s01e02_04.png?format=2500w',
        address : 'Vought Tower, Toronto, CA',
        location : {
            lat : 40.74,
            lng: -152.03
        },
         creator : 'u2'
    },
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator==userId);
    // Gives the component access to 
    return <PlaceList items = {loadedPlaces}/>
};



export default UserPlaces;