import React, { useContext , useEffect, useState }  from 'react'
import '../bootstrap/bootstrap.css'
import './Course.css'
import userContext from '../Context/UserContext'
import { Link } from 'react-router-dom';

function MyCourses() {
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

    const {userName} = useContext(userContext);
    const {userLastName} = useContext(userContext);
   var s=userName;
   var s2=userLastName;
   var s3=s+" "+s2;


    return (
        <div>
            
            <div className=' container' >
            <h1>Core courses</h1>
{data.map(course=>{
    return(
          
                ( s3 === course.teacher ) && 
                 
                         
                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                    <div key = '_id'>
                        
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body"></div>
                        <h1 className="display-4">{course.name}</h1>
                     
                        <hr className="my-4"/>
                        <strong>
                        <p>Course credits : {course.credits}</p>
                        <p>Mentors: {course.teacher}</p>
                        </strong>
                        <Link  to= {`/courseTeacher/${course._id}`} >
                                            <button className="btn btn-primary btn-course">Edit Course</button>
                            
                                        </Link>
                        </div>
                        </div>
                        </div>
                       
    )})}
    </div>

    <div className=' container' >
            <h1>Technical courses</h1>
{data1.map(course=>{
    return(
          
                ( s3 === course.teacher ) && 
                 
                         
                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                    <div key = '_id'>
                        
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body"></div>
                        <h1 className="display-4">{course.name}</h1>
                     
                        <hr className="my-4"/>
                        <strong>
                        <p>Course credits : {course.credits}</p>
                        <p>Mentors: {course.teacher}</p>
                        </strong>
                        <Link  to= {`/courseTeacher/${course._id}`} >
                                            <button className="btn btn-primary btn-course">Edit Course</button>
                            
                                        </Link>
                        </div>
                        </div>
                        </div>
                       
    )})}
    </div>

    
    <div className=' container' >
            <h1>Non-Technical courses</h1>
{data2.map(course=>{
    return(
          
                ( s3 === course.teacher ) && 
                 
                         
                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                    <div key = '_id'>
                        
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body"></div>
                        <h1 className="display-4">{course.name}</h1>
                     
                        <hr className="my-4"/>
                        <strong>
                        <p>Course credits : {course.credits}</p>
                        <p>Mentors: {course.teacher}</p>
                        </strong>
                        <Link  to= {`/courseTeacher/${course._id}`} >
                                            <button className="btn btn-primary btn-course">Edit Course</button>
                            
                                        </Link>
                        </div>
                        </div>
                        </div>
                       
    )})}
    </div>

    
          
        </div>


    )
}

export default MyCourses
