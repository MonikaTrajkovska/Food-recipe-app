import React from 'react'
import './Recipe.css'
const Movie =(props)=>{
  // console.log({recipe})
  console.log(props.label)
  
  
  return(
    <div className="row">
      <div className="column">
          <div className="card">
           <h1>{props.label}</h1>
           <img src={props.image} alt="slika"/>    
            
             <p>{Math.round(props.calories)} Calories per serving</p> 
            
           {props.totalTime !== 0 ? (
          <p>Preparation time:{props.totalTime} mins</p>
        ) : null}
  <p>Servings: {props.yield} Foodies</p>
  
   <p><a href="#" onClick={()=>props.viewMovieInfo()}>View details </a></p>
             
           </div>
          
         
    
          
    </div>
              
          </div>
      
  )
}
export default Movie