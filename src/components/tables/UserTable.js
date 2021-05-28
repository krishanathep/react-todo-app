import React from "react";
import { Table, Button } from "react-bootstrap";

const UserTable = (props) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Button variant='info' onClick={()=>{props.editRow(user)}}>Edit</Button>{' '} 
                <Button variant='info' onClick={()=>props.deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='4' align='center'>No users</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
