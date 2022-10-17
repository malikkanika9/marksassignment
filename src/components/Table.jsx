import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logoutAction } from '../Redux/actions/loginaction';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';
 import Part3 from './Part3';

const Tablecmpt = () => {
    const navigate = useNavigate()
    const { token } = useSelector(state => state.resultdata4.token);
    console.log(token)
    const dispatch = useDispatch()
    const [post, setPost] = useState("");

    const logout = () => {
        dispatch(logoutAction())
        navigate("/")
    }
useEffect(()=>{
    axios.get("http://localhost:3001/hello")
    .then((res)=>{
        console.log(res)
        setPost(res.data)
    })
},[])

console.log(post)

    return (
<>
        <Container className='border border-secondary border-3 ' >   


    <Row className='border-bottom border-secondary border-1 '>
    <Button style={{justifyContent:"right", backgroundColor:"#4b6cb7 " }} onClick={logout}>logout</Button> 
<Col className='text-center '  >
    
    <p className=" fs-3 fw-3  text-center pt-1 text-danger fw-bold"  >  First Terminal Examination 2018-2019</p>
<p>{post}</p>

</Col>

    </Row>
    <Row className='border-bottom border-secondary border-1'>
<Col className='text-center'>
    <p className='fs-4 fw-bold '> ACADEMIC PERFORMANCE</p>
</Col>
    </Row>

    <Row>
  <Col>
      <Row className='border-bottom border-secondary border-1'>
        <Part1/>
         <Part2/>
      </Row>
  </Col>
            </Row>
            <Part3/>
        </Container>
      
         </>
    )
}



export default Tablecmpt;