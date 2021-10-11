import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await axios.get(`${BASE_API_URL}/users`);
        setUsers(users.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User Email</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Birthday</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {users.length
          ? users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.mobile}</td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  );
};

export default UserList;
