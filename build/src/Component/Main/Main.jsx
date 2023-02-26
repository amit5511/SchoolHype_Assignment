import React from 'react'
import './Main.css'
import Marketing from '../../Img/Marketing.png'
const Main = () => {


  return <>
    <div className='main_container'>
      <div className='left_main_conatiner'>
        <p>Reach your - audience & convert your leads</p>
        <p>Get your customers with SEO, rank your business with email marketing, build sales leads</p>
        <a className='btn' href='#main'>Get Started</a>
        <a className=' btn right_btn' href='#main'> &#9654; Get Started</a>
      </div>
      <div className='right_main_conatiner'>
        <div className='border'></div>
        <img src={Marketing} alt='img' />
      </div>
    </div>
  </>
}

export default Main