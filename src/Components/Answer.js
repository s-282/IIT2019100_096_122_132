import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ViewTest.css'
import './Answer.css'
import '../Auth/Register.css'
import '../Courses/AddCourse.css';
import '../bootstrap/bootstrap.css'

function Answer(props) {
    const [ques,getQues] = useState([]);
    const [ans,setAns] = useState();
    const testID = props.match.params.id2;

    useEffect(async() => {
        const response = await axios.get("http://localhost:5000/test/getQuestion");
        const da = await response.data;
        getQues(da); 
    }, []);

    useEffect( ()=> {
        console.log(ques);
    },[ques]);

    async function upload(quesNo,quesID){
        try {
            const a = {
                testID,
                ans,
                quesNo,
                quesID
            }
            await axios.post("http://localhost:5000/test/Answer",a);          
            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="row container">
            {ques.map(q=>{
                return(
                    (q._id === props.match.params.id)&&
                    <div className="questions">
                        <h3>Question Number: {q.questionNumber}</h3>
                        <h3>Max Marks: {q.maxMarks}</h3>
                        <h3>Ques: {q.ques}</h3>
                        <form onSubmit = {() => upload(q.questionNumber,q._id)}>
                            <input 
                                type='string'    
                                placeholder = {ans}
                                onChange = {(e) => setAns(e.target.value)}
                                value= {ans} 
                            />
                            <button className="create" type = 'submit'>Submit Answer</button>
                        </form>

                    </div>
                )})}
        </div>
    )
}

export default Answer
