import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {id:'u1',
    name:'Black Noir',
    image:'https://static.wikia.nocookie.net/amazons-the-boys/images/8/8b/Black-Noire-S3.png',
    places:3
  }];

  return <UsersList items = {USERS} />;
};

export default Users;
