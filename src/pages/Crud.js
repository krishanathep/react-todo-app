import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from "../components/forms/AddUserForm";
import UserTable from "../components/tables/UserTable";

const Crud = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
      user.id = users.length + 1
      setUsers([...users, user])
  }

  const deleteUser = (id) => {
      setUsers(users.filter((user)=>user.id !== id))
  }

  return (
    <Container>
      <Row>
        <Col md="auto">
          <h1 className="mt-3 mb-5">CRUD App with Hooks</h1>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </Col>
        <Col md="6">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default Crud;
