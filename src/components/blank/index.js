import React from "react";
import './styles.css'
import Card from '../images/enfermeiros.png'

export default function Blank(){
    return(
        <div className='blank'>
            <img src={Card} className='card' alt='card'/>
        </div>
    )
}