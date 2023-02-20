import './BasicButton.css'
import play from '../../images/play.png'
import pause from '../../images/pause.png'

import {React,useState,useEffect} from 'react'
function BasicButton(props){
    return(
        <button onClick={()=>props.onClick()} className="basic_button"> 
            
           {props.image?<img style={{width:30,height:30}} src={props.playing?pause:play}></img>:<span > 
                {props.text}
            </span>} 
        </button>
    )
}

export default BasicButton