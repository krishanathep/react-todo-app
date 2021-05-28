import React, { useState,useEffect } from "react";
import { Form,Button } from 'react-bootstrap'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(()=>{
    setUser(props.currentUser)
  },[props])

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();

          props.updateUser(user.id, user);
        }}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Enter username"
          />
        </Form.Group>
        <Button type="submit">Add new username</Button>{' '}
        <Button onClick={()=>props.setEditing(false)}>Cancel</Button>
      </Form>
    </div>
  );
};

export default EditUserForm;
