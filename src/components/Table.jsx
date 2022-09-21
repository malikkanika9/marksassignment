import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';
 import Part3 from './Part3';
 import html2pdf from "html2pdf.js";

const Tablecmpt = () => {

    const generatePDF = () => {
      const source = document.getElementById("container");
      const fileName = "Marks.pdf";
      var opt = {
        margin: 0.2,
        filename: fileName,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 8 },
        jsPDF: { unit: "in", format: "A4", orientation: "landscape" },
      };
      html2pdf().set(opt).from(source).save();
    };
    return (
<>
        <Container className='border border-secondary border-3 ' id="container">   
            
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
        <Button className="fw-Bold" variant="light" onClick={generatePDF}>
    Download Pdf
</Button>
         </>
    )
}



export default Tablecmpt;