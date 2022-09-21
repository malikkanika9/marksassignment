import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';
 import Part3 from './Part3';


const Tablecmpt = () => {

    return (
<>
        <Container className='border border-secondary border-3 ' >   
            
    <Row className='border-bottom border-secondary border-1 '>
<Col className='text-center '  >
    <p className=" fs-3 fw-3  text-center pt-1 text-danger fw-bold"  >  First Terminal Examination 2018-2019</p>
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