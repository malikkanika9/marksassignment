import React, { useState } from 'react';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";

import { Button, Form, Modal } from 'react-bootstrap'
import Select from 'react-select';

import { MiddleData } from './MiddleData';


export const Middle=()=>{
    const [show, setShow] = useState(false);
    const [list, setList] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

return(

<div style={{width:"100%", height:"80px",backgroundColor:"#395591", textAlign:"left"}}>\
<MiddleData/>
</div>

)

}