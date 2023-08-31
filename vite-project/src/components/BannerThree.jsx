import React from 'react'

const BannerThree = () => {
  return (
    <div className="banner banner--cards">
        <div className="center--ternary">
        <div className="column--3">
            <div className="card">
            <div className="card--top">
                    <div className="circle--small">

                <img src="olmec.png" alt="" className="card--image" />
                    </div>
                </div>

                
                <div className="card--bottom">
                <span className="card--title">
                INGLES DESDE CERO
                </span> 
                <span className="card--text">
                Para iniciantes que quieren una fundacion fuerte.

                </span>    
                <button className="bigButton">
                    $6000 MXN    
                </button>  
                </div>
            </div> 
            
            
        </div>
        
        <div className="column--3">
        <div className="card">
        <div className="card--top">
                    <div className="circle--small">

                <img src="maya.png" alt="" className="card--image" />
                    </div>
                </div>
                

                <div className="card--bottom">
                <span className="card--title">
                INGLES CLASICO
                </span> 
                <span className="card--text">
                Para los que ya tienen principios y buscan 
                advancar a nivel mas comodo.
                </span>    
                <button className="bigButton">
                    $6000 MXN    
                </button>  
                </div>
            </div> 
        </div>
       
        <div className="column--3">
        <div className="card">
                
                <div className="card--top">
                    <div className="circle--small">

                <img src="basilica.png" alt="" className="card--image" />
                    </div>
                </div>

                <div className="card--bottom">
                <span className="card--title">
                INGLES PARA PROFESSIONALES
                </span> 
                <span className="card--text">
                Perfecta tu ingles para hoteleria y conviertete
                en un embajador para tu pais.

                </span>    
                <button className="bigButton">
                    $6000 MXN    
                </button>  
                </div>
            </div> 
        </div>
        
        </div>
       
    </div>
  )
}

export default BannerThree