import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
