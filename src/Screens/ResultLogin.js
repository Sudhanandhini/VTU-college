import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Row,Col,Button,Form} from 'react-bootstrap';
import axios from 'axios';



const ResultLogin = () => {

    const[registerInput,setRegisterInput] = useState("")
    const[error,setError]= useState("")

    const navigate = useNavigate()
    

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("hello")
        if(registerInput === ''){
            setError("Please enter register id") 
        }
        else{
            axios.get('http://localhost:3004/studentInfo')
            .then((response) => {
                console.log("res",response.data)
                response.data.map((data) => {
                    if(data.regsiterId === registerInput){
                        navigate(`/resultpage/${registerInput}`)
                    }else{
                        setError("Invalid RegisterId")
                    }
                })
            })
            .catch((err) => console.log("err",err))
        }
    }

    const changeHandler = (e) =>{
        setRegisterInput(e.target.value)
        setError('')
    }

    
    return(
        <>
        <Link to='/'  className='btn-login'
        class='btn btn-dark my-3'   >
            Go Back</Link>

        <Row className='text-center '  >
            <Col>
               <h3 className='h3-login'>Check the Result Here...</h3>
            </Col>          
            
        </Row>  

        <Row>
           <Col></Col>
            <Col className='col-login'   >
                
              <Form  onSubmit={submitHandler}> 
                <Form.Label >Enter Your Register No: </Form.Label><br/>
                <Form.Control type="text" placeholder='Enter the Register No' 
                style={{width:"60%"}}
                value={registerInput} onChange={changeHandler}  /><br/><br/> 
                
                <Button type="submit" style={{marginTop:"1rem"}} >Submit</Button>
            
              </Form>
               
                {/* {error ? <div style={{color:"red"}}>{error}</div> : '' }  */}

               <div className='text-danger'>{error}</div>

            </Col>
            <Col></Col>
        </Row> 

       
        
        </>
    )
}

export default ResultLogin
