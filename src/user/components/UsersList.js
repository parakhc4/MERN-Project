import React from 'react';

//Third Party
import Card from '../../shared/components/UIElements/Card.js';
import UserItem from './UserItem.js';

//CSS
import './UserList.css';

const UsersList = props => {
    if (props.items.length == 0){
        return (<div className="center">
            <Card>
                <h2>No Users Found</h2>
            </Card>
        </div>
    );
}
return (<ul className = "users-list">
    {props.items.map(user=>{
        return <UserItem 
                key={user.id} 
                id={user.id} 
                img={user.image} 
                name={user.name} 
                placeCount={user.places}/>
    })}
</ul>
)};
// What we are doing here is for multiple items (or multiple users)
// we are mapping all of the stuffs
// "For each user in the users array, create a UserItem component inside a <ul>."
export default UsersList;