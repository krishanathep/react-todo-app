import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <Form onSubmit={event=>{event.preventDefault()
        if(!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
    }}>
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
        <Button type="submit">Add new username</Button>
      </Form>
    </div>
  );
};

export default AddUserForm;
