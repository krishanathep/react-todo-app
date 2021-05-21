import axios from "axios";
import React,{useState,useEffect} from "react";
import { Card,Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Courses = () => {
  const [courses, setCourses]=useState([])
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState('')

  const getData = async ()=>{
    try{
      setLoading(true)
      const res = await axios.get('https://api.codingthailand.com/api/course')
      console.log(res.data)
      setCourses(res.data.data)
    }catch(error){
      console.log(error)
    }finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Container>
      <Row>
        {courses.map((course)=>(
          <Col xs={12} md={3}>
          <br/>
          <Card key={course.id}>
            <Card.Img 
              variant='top' 
              src={course.picture} 
              height='150' 
            />
            <Card.Body>
              <Link to={`/detail/${course.id}`}>
              <Card.Title>{course.title}</Card.Title>
              </Link>
              <Card.Text>{course.detail}</Card.Text>
            </Card.Body>
          </Card>
          <br/>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
