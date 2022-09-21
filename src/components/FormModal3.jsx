import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { AiFillEdit, AiOutlineAppstoreAdd } from 'react-icons/ai';
import Select from 'react-select';
import { Part3Modal } from './Modal/Part3Modal';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
import { Addpart3_data,  Updatepart3_data }  from '../Redux/actions/action';
const options =[
  {value:"TERM-I", label:"TERM-I"},
  {value:"TERM-II", label:"TERM-II"}
]
const initialValues ={
  term:"",
  working:"",
  present:""
}

const FormModal3 = ({edit, data,idx}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [list, setList] = useState("");

  const dispatch = useDispatch()
  const {result_part3}= useSelector(state => state.result_data3)
  const selected = result_part3.map((item) => item.term.value);
  useEffect(() => {
    // let data = initialValues.fi
    let data = options.filter((item) => !selected.includes(item.value));
    // console.log(data);
    setList(data);
    // console.log(list)
  }, [result_part3]);

  // console.log(result_part3)
  return (
     <>
    {
      edit ?  (
        <span 
        onClick={handleShow}
        >
          <AiFillEdit/>
        </span>
      ):
      (
      <span onClick={handleShow}>
        <Button variant='light'>Part-3</Button>
      </span>
      )
    }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Days</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={edit ? data:initialValues }
            validationSchema={Part3Modal}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              edit ?
              dispatch(Updatepart3_data(idx,{...values, id:Math.random()+Date.now()})):
              dispatch(Addpart3_data({...values,id:Math.random()+Date.now()}))
              
              setTimeout(() => {
                setSubmitting(true);
                resetForm();
                setSubmitting(false);
              }, 500);
            }}
          >
            {({
              values,
              setFieldValue,
              handleChange,
              touched,
              errors,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                {/* {console.log(errors)} */}
                <div className="form-group">
                  <div className="drop-down">
                    <Select
                      options={list}
                      onChange={(options) => setFieldValue("term", options)}
                      name="term"
                      placeholder='Selcet Term'
                      value={values.term}
                      isDisabled={edit}
                    />
                    {touched.term && errors.term && (
                      <span className="error">{errors.term}</span>
                    ) }
                  </div>
                </div>
                <Form.Group>
                <br />
                <Form.Label>Working Days</Form.Label>
                  <Form.Control type='number'
                   onChange={handleChange}
                   value={values.working}
                   placeholder="enter Working Days"
                   name='working'/>
                   {
                    touched.working && errors.working && (<span className="error">{errors.working}</span>)

                   }
                </Form.Group>
                
                <Form.Group>
                    <br />
                  <Form.Label>Present Days</Form.Label>
                  <Form.Control type='number'
                   onChange={handleChange}
                   value={values.present}
                   placeholder="enter Present days"
                   name='present'/>
                  
                   {
                    touched.present && errors.present && (<span className="error">{errors.present}</span>)
                   }

                </Form.Group>
                <br />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2"
                >
                  {edit ?"Edit Days" : "Add Days"}
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      </>
  )
}

export default FormModal3