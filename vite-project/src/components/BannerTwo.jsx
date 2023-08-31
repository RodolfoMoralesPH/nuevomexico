import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
      <div className="center--ternary">
      <div className="column--2">
            <div className="title--medium">
                <span>Nuestra Mision</span>
            </div>
            <div className="description">
                <span>Mexico es un pais increible
                    y lleno de maravillas,
                    gente amable y una historia que 
                    vale oro. Nuestra mision es aumentar
                    el turismo en Mexico atravez de el 
                    aprendizaje del Ingles como linguafranca.
                </span>
                
            </div>
       </div>
       <div className="column--2 column--2--flex">
            <img className="column-1-of-4" id='image--1' src='beach.jpg' />
            
            <img className="column-1-of-4"
            id='image--2' src='centro.jpg'/>
            <img className="column-1-of-4"
            id='image--3' src='pyramid.jpg' />
            <img className="column-1-of-4"
            id='image--4' src='wall.jpg'/>
       </div>
      </div>
      
    </div>
  )
}

export default Banner