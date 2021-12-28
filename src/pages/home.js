import React from 'react'
import './home.css'
import Fundo from '../components/images/fundo.png'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

export default function Home(){
    return(
        <div className='home'>
          <img src={Fundo} className='fundo' alt='fundo'/>
          <div className='top'>
            <div className='topElements'>
              <input type='text' placeholder='EMAIL' />
              <input type='password' placeholder='SENHA'/>
              <Link to='/wellcome' className='btnEntrar'>ENTRAR</Link>
            </div>
          </div>
          <div className='content'>
            <h4>PORTAL DO COLABORADOR</h4>
            <h1>GUARDIAN</h1>
            <h1>ANGEL</h1>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
    )
}