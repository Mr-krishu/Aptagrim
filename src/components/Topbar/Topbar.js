import React from 'react'
import {data} from '../../dummydata'
import avatar from './avatar.jpg'
import {NotificationsNone,Sort,CalendarToday} from '@material-ui/icons';
import {InputLabel,Select,MenuItem,FormControl} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import './topbar.css';
const Topbar = () => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(2),
          minWidth: 50,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));


    return (
        <div className="topbar">
            <div className="topbarWrapper">

                <div className="topleft">
                   <span className="logo">Krishna</span> 
                 
                </div>

                <div className="topright">

                    <div className="topbariconContainer">
                        <input className="inputbox" type="text"/>
                    </div>
                    <div className="topbariconContainer">
                    <NotificationsNone/>
                    <span className="topIconBag">2</span>
                    </div>
                    <div className="topbariconContainer">
                    <NotificationsNone className="notification"/>
                    <span className="topIconBag">2</span>
                    </div>
                    <img src={avatar} alt="" className="topAvatar"/>
                </div>

               
                
            </div>
            <div className="belowtop">
                        <ul className="menulist">
                        <li className="listitem">New Hire</li>
                        <li className="listitem">Onboarding In-Progress</li> 
                        <li className="listitem">Onboarding Completed</li>
                        <li className="listitem">Background Check</li>
                        </ul>
                </div>


                <div className="containerwrapper">

                    <div className="usernumber">
                    No. of Candidates: 
                      <span className="number">  {data.length}</span>
                      </div>
                   <div className="sidebox">
                     <div className="sidebox2">
                   <FormControl variant="outlined"className="filter" >
                   <InputLabel htmlFor="outlined-age-native-simple"><Sort/></InputLabel>
                  <Select
                     native
                     label="Age"
                      inputProps={{
                      name: 'filter',
                     id: 'outlined-age-native-simple',
                   }}  >
          <option  aria-label="Filter" value=""></option>
          <option>UX/UI Designer</option>
          <option>React Developer</option>
          <option>Python Developer</option>
          <option>UI Developer</option>
        </Select>
        </FormControl>
        <span className="calender">
        <CalendarToday className="calender"/>
        </span>
        
             </div>
        </div>
        </div>
        </div>
    )
}

export default Topbar;