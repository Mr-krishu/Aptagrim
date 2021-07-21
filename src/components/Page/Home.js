import React from 'react'
import './home.css'
import {data} from '../../dummydata'
import { Link,BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="homewrapper">
       { data.map((data,index)=>{
        return(
            <div key={index}className="usercontainer">
               <img src={data.avatar} alt="" className="topAvatar1"/>
               <h6 className="email">{data.email}</h6>
               <h6 className="role">{data.title}</h6>
               <h6 className="mobile">{data.mobile}</h6>   
               <Router>
                   <div className="buttonview">
                   <Link to='/user'className="views" >View</Link>
                   </div>
                  
            
              
               </Router>
              
            </div>
           
        )})}
    </div>
</div>
        )
    
        
        }

export default Home
