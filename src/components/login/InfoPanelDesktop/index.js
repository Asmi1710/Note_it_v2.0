import React from 'react';

import './index.css';

const InfoPanelDesktop = (props)=>{
  return (
    <div className='info-section-conatiner container col-lg-6 info-section'>
         {/* <div className='rect-1'><IconFunc name='rect1' /></div> */}
        <div className='flex-style'>
            <img src='./logo-2.png' className='logo-fixed'/>
            <div className='logo-fixed-text'>ote-it</div>
        </div>
        <div>Master your notes, elevate your productivity</div>
        <div className='screenshot-fixed'>
            <img src='./screenshot-cropped.png' />
        </div>
    </div>
  )
}

export default InfoPanelDesktop