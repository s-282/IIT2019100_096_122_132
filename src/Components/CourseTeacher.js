import React, { useContext , useEffect, useState }  from 'react'
import '../bootstrap/bootstrap.css'
import './Course.css'
import './CourseTeacher.css'
import { Link } from 'react-router-dom';
import userContext from '../Context/UserContext'
import image3 from '../images/pdf-logo.png'
import image2 from '../images/image-logo.png'
import image1 from '../images/video-logo.png'
import image4 from '../images/clndr-01.png'

function CourseTeacher(props) {
    const {user} = useContext(userContext);
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
  const[Announcement,setAnnouncement]= useState([]);
  const[Faq,setFaq]= useState([]);

  useEffect(async() => {
    const response = await fetch("http://localhost:5000/course/getAnnouncements");
    const da = await response.json();
    setAnnouncement(da);
}, []);
useEffect( () => {
   
}, [Announcement]);

useEffect(async() => {
    const response = await fetch("http://localhost:5000/course/getFaq");
    const da = await response.json();
    setFaq(da);
}, []);
useEffect( () => {
   
}, [Faq]);

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

    console.log("Annoucement length ---", Announcement.length);

    const {userName} = useContext(userContext);

    return (
       
        <div className=' container' >
     
            {data.map(course=>{
                return(
                      
                            ( course._id === props.match.params.id ) && 
                              <div>
                                  console.log(course);

                                <div className="jumbotron course">
                                    <h1 className="display-4">{course.name}</h1>
                                    <p className="lead">{course.description} </p>
                                    <hr className="my-4"/>
                                    <strong>
                                    <p>Course credits : {course.credits}</p>
                                    <p>Mentors: {course.teacher}</p>

                                    </strong>
                                    <a href = {course.link} target="_blank"><button className = "btn btn-sm btn-warning"><strong>Live Session </strong></button></a>
                                </div>
                                <div className = "row">
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    {/* <button className="btn btn-primary btn-lg btn-course btn-cal">Edit Calendar</button> */}
                                    <Link to="#" ><img className = "calendar" src={image4} alt=""/> </Link>
                                    </div>
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12 course-btns">
                                   
                                        <div className='course_sudents row ml-2 mr-2'>
                                        
                                        <Link  to= {`/peers/${course._id}`} >   <button className="btn btn-primary btn-lg btn-course btn-peers">Student's List</button></Link> 
                                        
                                        </div>
                                      
                                        <br/>
                                        { user === 'Teacher' &&
                          <div>
                                        <div className='course_doubts row ml-2 mr-2'>
                                            {/* <button className="btn btn-primary btn-lg btn-course ">Post Announcements</button> */}
                                            <Link  to= {`/Announcement/${course._id}`} >  <button className="btn btn-primary btn-lg btn-course btn-peers">Post Announcements</button></Link>
                                        </div>
                                        <br/>
                                        <div className='course_doubts row ml-2 mr-2'>
                                            {/* <button className="btn btn-primary btn-lg btn-course">Take Test</button> */}
                                            <Link  to= {`/test/${course._id}`} >   <button className="btn btn-primary btn-lg btn-course btn-peers">Take Tests</button></Link>
                                        </div> 
                                    </div>
                                   
                                  }
                                </div>
                                </div>
</div> 

        
                    
                    
                )
            }
            )}


            
{data1.map(course=>{
                return(
                      
                            ( course._id === props.match.params.id ) && 
                                <div className="jumbotron course">
                                       console.log(course);
                                    <h1 className="display-4">{course.name}</h1>
                                    <p className="lead">{course.description} </p>
                                    <hr className="my-4"/>
                                    <strong>
                                    <p>Course credits : {course.credits}</p>
                                    <p>Mentors: {course.teacher}</p>
                                    </strong>
                                
                                    <div className='course_sudents row ml-2 mr-2'>
                                    <Link  to= {`/peers/${course._id}`} ><button   className="btn btn-primary btn-lg btn-course">Student's List</button></Link>
                {/* <button className="btn btn-primary btn-lg btn-course">Post your Doubts</button> */}
            </div>
            <br/>
            { user === 'Teacher' &&
                          <div>
            <div className='course_doubts row ml-2 mr-2'>
            <Link  to= {`/Announcement/${course._id}`} > <button className="btn btn-primary btn-lg btn-course">Post Announcements</button></Link>
            </div>
            <br/>
            <Link  to= {`/test/${course._id}`} >  
            <div className='course_doubts row ml-2 mr-2'>
                <button className="btn btn-primary btn-lg btn-course">Take Test</button>
            </div> 
            </Link>
            
            </div>
}

          
       
                                    
                                </div>
                            
                        
                        
                    
                    
                )
            })}

            
{data2.map(course=>{
                return(
                      
                            ( course._id === props.match.params.id ) && 
                                <div className="jumbotron course">
                                       console.log(course);
                                    <h1 className="display-4">{course.name}</h1>
                                    <p className="lead">{course.description} </p>
                                    <hr className="my-4"/>
                                    <strong>
                                    <p>Course credits : {course.credits}</p>
                                    <p>Mentors: {course.teacher}</p>
                                    </strong>
                                    
                                    <div className='course_sudents row ml-2 mr-2'>
                                    <Link  to= {`/peers/${course._id}`} >  <button className="btn btn-primary btn-lg btn-course">Student's List</button></Link>
                {/* <button className="btn btn-primary btn-lg btn-course">Post your Doubts</button> */}
            </div>
            <br/>
            { user === 'Teacher' &&
                          <div>
            <div className='course_doubts row ml-2 mr-2'>
            <Link  to= {`/Announcement/${course._id}`} >   <button className="btn btn-primary btn-lg btn-course">Post Announcements</button></Link>
            </div>
            <br/>
            <Link  to= {`/test/${course._id}`} >  
            <div className='course_doubts row ml-2 mr-2'>
                <button className="btn btn-primary btn-lg btn-course">Take Test</button>
            </div> 
            </Link>
            </div>}



       
            
        
                                </div>
                            
                        
                        
                    
                    
                )
            })}

<div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title"> Announcements.. </h1>

                    </div>
                    </div>
                    {Announcement.map(announcement=>{
                        console.log(announcement.course);
                        return(
                            <div>

                                
                                
                                    { announcement.course === props.match.params.id  && 
                                         
                                        <div className="jumbotron course">
                                            <p className="display-4">{announcement.type}</p>
                                            <p className="lead">{announcement.description} </p>
                                            <hr className="my-4"/>
                                            
                                            <div className='course_sudents row ml-2 mr-2'>
                                                <a  href= {announcement.link} target="_blank" >  <button className="btn btn-primary btn-lg btn-course">Link</button></a>
                        {/* <button className="btn btn-primary btn-lg btn-course">Post your Doubts</button> */}
                                            </div>
          

       
            
        
                                </div>
                    }
                                </div>
                        
                    
                    
                )
            
            })}


            
            
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image3} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">New Assignment</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Recorded Video of Today's class </h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                <div className="img-square-wrapper">
                                    <img className="" src={image1} alt="Card image cap"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image2} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Resources for class diagrams</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image2} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Feedback and queries</h4>
                                    <p className="card-text">Students can ask questions</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { user==='Student' &&
            <div>
              <Link  to= {`/Faq/${props.match.params.id}`} >  <button className="btn btn-primary btn-lg btn-course btn-peers">Ask Questions </button></Link>

                </div>

        }

{Faq.map(faq=>{
                        console.log(faq.question);
                        return(
                            <div>

                                
                                
                                    { faq.course === props.match.params.id  && 
                                         
                                        <div className="jumbotron course">
                                            <p className="display-4">{faq.student}</p>
                                            <p className="lead">{faq.question} </p>
                                            <hr className="my-4"/>
                                            
                                           

       
            
        
                                </div>
                    }
                                </div>
                        
                    
                    
                )
            
            })}
          </div>
    )
}

export default CourseTeacher
