import React from "react";
import './styles.css'
import Card from '../images/graficos.png'

export default function Graphics(){
    return(
        <div className='graphics'>
            <img src={Card} className='card' alt='card'/>
        </div>
    )
}