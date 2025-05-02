import React from "react";

import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = props => {

    if (props.items.length == 0){
        return (<div className="place-list center">
            <Card>
                <h2>
                    No Places Found
                    <button>Share Place</button>
                </h2>
            </Card>
        </div>
        );
    }

    else {
        return (<ul className = "place-list">
            {props.items.map(place => 
            <PlaceItem 
            key={place.id}
            id = {place.id}
            image={place.imageUrl}
            title = {place.title}
            description = {place.description}
            address = {place.address}
            creatorID = {place.creator}
            coordinates = {place.location}
                ></PlaceItem>)}
        </ul>);
    }

};


export default PlaceList;