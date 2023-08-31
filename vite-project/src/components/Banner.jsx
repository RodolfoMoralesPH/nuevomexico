import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
       <div className="center--ternary">
       <div className="column--2">
       <div className="circle">
            <img src="tren.png" alt="" className='tren' />
            <img src="maya.png" alt="" className='maya' />
            <img src="flag.png" alt="" className="flag" />
        </div>
       </div>
       <div className="column--2">
            
            <div className="title">
            <span>TEMUESTROMEXICO</span>
            </div>
        <div className="description">
            <span>Te ensenamos Ingles para
                que tu ensenes lo bonito de 
                Mexico.
            </span>
            
        </div>
        <button className="bigButton">
                ENTRA
            </button>
            </div>
       
       </div>
    </div>
  )
}

export default Banner