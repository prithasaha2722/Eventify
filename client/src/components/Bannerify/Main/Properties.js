import React from 'react'
import classes from './Properties.module.css'

export default function Properties(props) {
    return (
        <div className={classes.propertyArea}>
            <div className={classes.ImageArea}>
                <img src={props.Image} alt={`property-${props.propertyNumber}`} className={classes.Image}/>
            </div>
            <div className={classes.propertyBody}>
                <div className={classes.propertyNumber}>{`0${props.propertyNumber}`}</div>
                <div className={classes.propertyText}>{props.Text}</div>
            </div>
        </div>
    )
}
