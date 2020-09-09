import React from 'react'
 import Recipe from '../Recipe/Recipe'

 import {v4 as uuidv4} from "uuid"

const RecipeList=(props)=>{
 console.log(props.id)
 
 
    return(
    
        <div >
            <div>
            <div >
               
                {
                   props.recipes !== [] && props.recipes.map((recipe)=>(
                       
                            <Recipe  key={uuidv4()} 
                            viewMovieInfo={props.viewMovieInfo}
                            movieId={props.id} 
                            label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} 
                            url={recipe.recipe.url}
                            totalTime={recipe.recipe.totalTime}
                            servings={recipe.recipe.yield}
                            source={recipe.recipe.source}
                            healthLabels={recipe.recipe.healthLabels}
                            dietLabels={recipe.recipe.dietLabels}
                            ingredients={recipe.recipe.ingredients}
                       
                            
                            />
                           
                           
                        )
                    )
                   }
               
                
                 </div>

            </div>
            
        </div>
    )
}
export default RecipeList