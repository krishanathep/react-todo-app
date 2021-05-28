import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from "../components/forms/AddUserForm";
import UserTable from "../components/tables/UserTable";
import EditUserForm from "../components/forms/EditUserForm";

const Crud = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col md="auto">
          <h1 className="mt-3 mb-5">CRUD App with Hooks</h1>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </Col>
        <Col md="6">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default Crud;
