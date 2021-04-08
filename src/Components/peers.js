import { render } from '@testing-library/react'
import React, {  useContext , useEffect, useState  } from 'react'
import '../bootstrap/bootstrap.css'
import image from '../images/teacher-profile-01.png'
import './peers.css'

function Peers(props) {
 
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetCoreCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);

  
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetTechnicalElectiveCourses");
        const da = await response.json();
        setData1(da);
    }, []);
    useEffect( () => {
        console.log(data1);
    }, [data1]);

    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetNonTechnicalElectiveCourses");
        const da = await response.json();
        setData2(da);
    }, []);
    useEffect( () => {
        console.log(data2);
    }, [data2]);

    
    return(
       

        <div className="peers">
             <div className="container">
                <div className="card bg-dark text-white enroll-card">
                    <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                    <div className="card-img-overlay">
                   
                        <h1 className=" enroll-card-title card-title">People</h1>
                    </div>
                </div>
                <div className="Teachers">
                
                <div className="teach-list">
                <div className="card-horizontal ">
                    <div className="img-square-wrapper">
                            <img className="" src = {image} alt="Card image cap"/>
                        </div>
                        <div className="card-body">
                       

{data.map(course=>{
    return(
          
                ( course._id === props.match.params.id ) && 
                  <div>
                  
                            <h4 className="card-title explore-title">Teacher: </h4>
                            <p className="card-text">{course.teacher}</p>
                            <p className="card-text"> Professor at Indian Institute of Information Technology, Allahabad.<br/> Devghat, Jhalwa, Allahabad, India</p>
                            <div className="Students">
                
                <div className="jumbotron list-stu">
                <h3 className="stu-head">Students: </h3>
                    <ul>
                    {course.student.map(stud=>{
                        <div>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i> {stud.firstName} {stud.lastName}</li>
                        <hr className="my-4"/>
                        </div>
                    
                    })}
                    </ul>

                </div>

                </div>
                )
                      
                    </div>
                

              
    )

})}
{data1.map(course=>{
    return(
          
                ( course._id === props.match.params.id ) && 
                  <div>
                  
                            <h4 className="card-title explore-title">Teacher: </h4>
                            <p className="card-text">{course.teacher}</p>
                            <p className="card-text"> Professor at Indian Institute of Information Technology, Allahabad.<br/> Devghat, Jhalwa, Allahabad, India</p>
                            <div className="Students">
                
                <div className="jumbotron list-stu">
                <h3 className="stu-head">Students: </h3>
                    <ul>
                    {course.student.map(stud=>{
                        <div>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i> {stud.firstName} {stud.lastName}</li>
                        <hr className="my-4"/>
                        </div>
                    
                    })}
                    </ul>

                </div>

                </div>
                )
                      
                    </div>
                

              
    )

})}
{data2.map(course=>{
    return(
          
                ( course._id === props.match.params.id ) && 
                  <div>
                  
                            <h4 className="card-title explore-title">Teacher: </h4>
                            <p className="card-text">{course.teacher}</p>
                            <p className="card-text"> Professor at Indian Institute of Information Technology, Allahabad.<br/> Devghat, Jhalwa, Allahabad, India</p>
                            <div className="Students">
                
                <div className="jumbotron list-stu">
                <h3 className="stu-head">Students: </h3>
                    <ul>
                    {course.student.map(stud=>{
                        <div>
                        <li className="peer"> <i className="fas fa-user-circle stu "></i> {stud.firstName} {stud.lastName}</li>
                        <hr className="my-4"/>
                        </div>
                    
                    })}
                    </ul>

                </div>

                </div>
                )
                      
                    </div>
                

              
    )

})}

</div>
</div>
</div>
</div>
</div>
</div>
)
}
export default Peers