import React from "react";
import './styles.css'
import Card from '../images/demonstrativo.png'

export default function Demonstrative(){
    return(
        <div className='demonstrative'>
            <img src={Card} className='card' alt='card'/>
        </div>
    )
}