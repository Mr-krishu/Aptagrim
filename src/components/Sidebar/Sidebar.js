import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <span className="logos">EOA</span>
                    <div className="sideMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                       <span className="tags">
                           <Link to='/'  className="tags">Dashboard</Link></span> 
                        </li>
                        <li className="sidebarListItem"> 
                        Employees
                        </li>
                        <li className="sidebarListItem"> 
                        Stages
                        </li>
                        <li className="sidebarListItem"> 
                       Welcome Stages
                        </li>
                        <li className="sidebarListItem"> 
                      Offer Letter
                        </li>
                        <li className="sidebarListItem"> 
                        Skill Matrix
                        </li>
                        <li className="sidebarListItem"> 
                        Know Your Company
                        </li>
                        <li className="sidebarListItem"> 
                        Joining Day information
                        </li>
                        <li className="sidebarListItem"> 
                        Feedback
                        </li>
                        <li className="sidebarListItem"> 
                        Background Check
                        </li>
                        <li className="sidebarListItem"> 
                        Settings
                        </li>

                    </ul>
                </div>
              
</div>
                


              
            </div>
            
        </div>
    )
}

export default Sidebar
