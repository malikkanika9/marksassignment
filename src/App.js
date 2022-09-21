
import Tablecmpt from './components/Table';
import html2pdf from "html2pdf.js";
import {Button} from "react-bootstrap"
import {useRef} from "react"
function App() {
  const componentRef = useRef();
  const generatePDF = () => {
    const source = document.getElementById("container");
    const fileName = "Marks.pdf";
    var opt = {
      margin: 0.1,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 8 },
      jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(source).save();
  };
  return (
    <div className="App" id="container">
  <Tablecmpt ref={componentRef}/>
      <div className="d-flex justify-content-center m-3">
      <Button variant='light' onClick={generatePDF} >Download PDF</Button>
      </div>
    </div>
    
  );
}

export default App;
