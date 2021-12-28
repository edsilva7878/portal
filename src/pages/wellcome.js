import React from "react";
import Header from '../components/header'
import Blank from "../components/blank";
import Footer from '../components/footer'

export default function Wellcome() {
  return (
      <div className='wrapper'>
        <Header />
        <Blank/>
        <Footer />
      </div>
  );
}