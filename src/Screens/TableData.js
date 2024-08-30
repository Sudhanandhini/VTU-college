import React,{useState,useEffect} from "react";
import {Table,Container} from 'react-bootstrap';
import axios from "axios";
import {ToWords} from 'to-words';

const TableData  = ({studentId}) => {
    console.log("props",studentId)

    const[resultData,setResultData] = useState([])
    const towords = new ToWords();

    useEffect(() =>{
        axios.get('http://localhost:3001/resultInfo')
        .then((res) =>{
            console.log("res111",res.data)
            let temp = res.data.filter((d) => d.regsiterId === studentId)
            console.log("temp",temp)
            setResultData(temp)
        })
        .catch((err) => console.log("err",err))
    },[studentId])
    console.log("resultData",resultData)

    const getTotalMarks = (value) =>{
        console.log("value",value)
        let sum = 0;
        resultData.map((d) =>{
            sum += parseInt(d[value])
        })
        console.log("sum",sum)
        return sum
    }

    const finalResult = () =>{
        let count = 0;
        resultData.map((d) =>{
            if(d.result === 'FAIL'){
                count ++;
            }
        })
        console.log("count",count)
        if(count >= 1){
            return "FAIL"
        }else{
            return 'PASS'
        }
    }
    
    const scoreHandler = () =>{
        let sum = 0;
        resultData.map((d) =>{
            sum += parseInt(d.obtained_marks)
        })
        let status;
        if(sum >= 250){
            status = 'DISTINCTION'
        }else if(sum < 250 && sum>=230){
            status = 'FIRST CLASS'
        }else{
            status = 'FAIL'
        }
        return status
    }

    const percentageHandler = () =>{
        let max_marks = getTotalMarks('max_marks')
        let obtained_marks = getTotalMarks('obtained_marks')
        console.log("marks111",max_marks,obtained_marks)
        let x = '%',
        percent = Math.floor((obtained_marks/max_marks)*100 )
        console.log("per",percent)
        return [percent,x]
    }

    const towordsHandler = () =>{
        const a = getTotalMarks('obtained_marks')
        let text = towords.convert(a)
        return text
    }


    return(
        <Container>
          <Table className="my-5" responsive bordered >
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th colSpan={2}>Subject
                       <th >Code</th>
                       <th >Subject</th>
                    </th>
                    <th colSpan={3}>Examination Mark Obtained
                       <th >Max</th>
                       <th >Min</th>
                       <th >Obtained</th>
                    </th>
                    <th >Subject results</th>
                </tr>
            </thead>

            <tbody>
                {
                    resultData.map((data,index) =>(
                        <tr key = { index}>
                            <td>{index+1}</td>
                            <td> {data.code} </td>
                            <td> {data.subject} </td>
                            <td> {data.max_marks} </td>
                            <td> {data.min_marks} </td>
                            <td> {data.obtained_marks} </td>
                            <td> {data.result} </td>
                        </tr>
                    ))
                }
            </tbody>
            <thead>
                <tr>
                    <th colspan={3} >Grand Total</th>
                    <td> {getTotalMarks('max_marks')} </td>
                    <td> {getTotalMarks('min_marks')} </td>
                    <td> {getTotalMarks('obtained_marks')} </td>
                    <td> {finalResult()} </td>
                </tr>
            </thead>
          </Table>

          <br/>

          
          <p><b>Total mark obtained [in words] : </b> {towordsHandler()} </p><br/>     
          <p><b>Result of Semester :</b> {scoreHandler()} </p><br/>
          <p><b>Percentage :</b> {percentageHandler()} </p><br/>
          <p><b>Date : </b> 25 Dec 2024</p>         

        </Container>
    )
}

export default TableData;