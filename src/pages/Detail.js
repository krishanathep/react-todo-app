import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      //console.log(res.data.data)
      setDetail(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Product Detail</h1>
        </Col>
      </Row>
      <Row>
        {detail.map((item) => (
          <Col xs={12} md={4}>
            <br/>
            <Card key={item.id}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Card Text</Card.Text>
              </Card.Body>
            </Card>
            <br/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Detail;
