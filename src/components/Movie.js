import React from 'react'
import { Link } from "react-router-dom";
const Movie =(props)=>{
  // console.log({recipe})
  console.log(props.label)
  
  
  return(
      <div >
          
              
                <h2>Ttile</h2>
                <h1>{props.label}</h1>
              
             <p>{props.calories}</p> 
           <img src={props.image} alt="slika"/>
          
           {/* <ol>
             {props.ingredients.map((ingredient)=>(
               <li>{ingredient.text}</li>
             ))}
           </ol> */}


            <a href={props.url} target="blank" role="button">View Recipe</a>

               <div className="card-content">
               <p><a href="#" onClick={()=>props.viewMovieInfo()}>View details </a></p>
            </div> 
          </div>
      
  )
}
export default Movie