import React from 'react'
 import Movie from './Movie'


// // const MovieList=(props)=>{
// //     return(
// //         <div className="container">
// //         <div className="row">
// //         <div className="col s12">
// //                 {
// //                     props.ingredients.map((ingredient,i)=>{
// //                         return(
// //                             <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={ingredient.text} />
// //                         )
// //                     })
// //                 }
// //             </div>
               
            
// //         </div>
// //     </div>
// //     )
    
// // }
const MovieList=(props)=>{
    console.log(props.recipes)
    
    return(
        <div >
            <div >
            <div >
               
                {
                   props.recipes !== [] && props.recipes.map((recipe)=>(
                       
                            <Movie  key={recipe.recipe.label} 
                            viewMovieInfo={props.viewMovieInfo}
                            movieId={recipe.recipe.foodId} 
                            label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} 
                            url={recipe.recipe.url}
                            ingredients={recipe.recipe.ingredients}/>
                        )
                    )
                }
               
                
                 </div>

            </div>
            
        </div>
    )
}
export default MovieList