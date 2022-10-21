import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { logoutAction } from '../Redux/actions/loginaction';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';
 import Part3 from './Part3';

const Tablecmpt = () => {
    const navigate = useNavigate()
    const state = useLocation();
    const { result_part1 } = useSelector((state) => state.result_data);
    const {result_part2} = useSelector(state => state.result_data2)
   console.log("rrr",result_part1,result_part2)
    console.log("st",state.state.field)
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

const handleSend=()=>{
 let obj={}

for(var i=0;i<result_part1.length;i++)
{
console.log("res",result_part1[i])
result_part1[i].sub=result_part1[i].sub.value

}

for(var j=0;j<result_part2.length;j++)
{
console.log("res",result_part2[i])
result_part2[j].category=result_part2[j].category.value
result_part2[j].grade=result_part2[j].grade.value
}

state.state.field.section=state.state.field.section.value

obj["part1"]=result_part1
obj["part2"]=result_part2
obj["studentInfo"]=state.state.field

console.log("obj",obj)
}

console.log(post)

    return (
<>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Section</th>
      <th scope="col">RollNo</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>{state.state.field.stuName}</td>
      <td>{state.state.field.classs}</td>
      <td>{state.state.field.section.value}</td>
      <td>{state.state.field.roll_num}</td>
    </tr>
    
  </tbody>
</table>
        <Container className='border border-secondary border-3 ' >   
    <Row className='border-bottom border-secondary border-1 '>
    <Button style={{justifyContent:"right", backgroundColor:"#4b6cb7 " }} onClick={logout}>logout</Button> 
<Col className='text-center '  >
    <p className=" fs-3 fw-3  text-center pt-1 text-danger fw-bold"  > 

     First Terminal Examination 2018-2019</p>

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
        <br />
  { result_part1.length>=2 && result_part2.length>=2 ? <Button style={{ marginLeft:"700px" }}
  onClick={handleSend}
  
  >Save</Button> : ""}
         </>
    )
}



export default Tablecmpt;