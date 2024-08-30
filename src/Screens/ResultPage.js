import React,{useState,useEffect} from 'react';
import {Row,Col, Form} from 'react-bootstrap';
import TableData from './TableData';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';



const ResultPage = () =>{

    const[studentData,setStudentData] = useState([])

    const value =  useParams()
    console.log("value",value)

    useEffect(() => {
        axios.get('http://localhost:3004/studentInfo')
        .then((response) =>{
            response.data.map((d) =>{
                if(d.regsiterId === value.id){
                    setStudentData(d)
                }
            })
        })
        .catch((err) => console.log("err",err))
    },[])


console.log("studentData",studentData)


    return(
        <>
        <Link to="/result/loginpage"  className='btn btn-warning my-4'> Go Back
        </Link>


        
        <Row className='justify-content-center my-5 ' >
            <Col sm={12} md={6} > 
            <h3>Visvervaya Technological Univercity, Belagavi.</h3>
            <h5 style={{marginLeft:"4rem"}} >VII - Semester B.E Examination Result, Nov/Dec-2024.  </h5>
            </Col>
        </Row>

        <Row>
            <Col sm={12} md={6}>
                <Form.Group>
                <Form.Label>Student Name :</Form.Label> 
                <Form.Label style={{marginLeft:"5rem"}} > {studentData.name} </Form.Label> <br/>
                <Form.Label>Father's/Mother's Name :</Form.Label> 
                <Form.Label style={{marginLeft:"1rem"}} > {studentData.fatherName} </Form.Label><br/> 
                <Form.Label>College Name :</Form.Label> 
                <Form.Label style={{marginLeft:"4.8rem"}} > {studentData.collegeName} </Form.Label> 
                </Form.Group>
            </Col>

            <Col sm={12} md={6}>
                <Form.Group>
                <Form.Label style={{float:"right"}} >RegisterId: {studentData.regsiterId} </Form.Label>                  
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <TableData  studentId = {studentData.regsiterId} />
        </Row>




        </>
    ) 
}

export default ResultPage
