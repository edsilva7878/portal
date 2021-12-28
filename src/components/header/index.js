import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import Photo from '../images/desenho.png'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

export default function Header(){
    return(
        <div className='header'>
            <img src={Photo} className='photo' alt='foto'/>
            <div className='elements'>
                <h1>JODIE FOSTER</h1>
                <div className='prof'> <FaClipboardList/> Enfermeira</div>
                <div className='tel'><FaPhone/> (11) 99999-9999 </div>
                <div className='email'><FaEnvelope/> email@guardianangel.com.br</div>

            </div>
            <div>
                <Link to='/wellcome' className='btn'>INICIAL</Link>
                <Link to='/user' className='btn'>INDICADORES</Link>
                <Link to='/financial' className='btn'>DEMOSNTRATIVO</Link>
                <Link to='/' className='btn'>SAIR</Link>
            </div>
        </div>
    )
}