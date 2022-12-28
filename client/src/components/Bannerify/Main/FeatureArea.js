import React from 'react'
import Button from '../UI/Button'
import classes from './FeatureArea.module.css'

export default function FeatureArea(props) {

    return (
        <div className={classes.featureItem} style={{flexDirection : props.orientation ? 'row-reverse': 'row'}}>
            <img src={props.image} alt={props.alt} className={classes.image} style={{'padding': '0px 60px'}}/>
            <div className={classes.featureBody} style={{paddingLeft: '60px'}}>
                <div className={classes.featureHead}>{props.header}</div>
                <div className={classes.featurePara}>{props.para}</div>
                <Button style={{'padding': '12px 20px !important'}}/>
            </div>
        </div>
    )
}
