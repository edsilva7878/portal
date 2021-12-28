import React from "react";
import Header from '../components/header'
import Graphics from "../components/graphics";
import Footer from '../components/footer'

export default function User() {
  return (
      <div className='wrapper'>
        <Header />
        <Graphics/>
        <Footer />
      </div>
  );
}