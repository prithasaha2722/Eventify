import React from 'react'
import classes from './Functionality.module.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Functionality(props) {
  return (
    <div className={classes.functionality}>
        <div className={classes.pointLogo}><TaskAltIcon /></div>
        <div className={classes.text}>{props.text}</div>
    </div>
    
  )
}
