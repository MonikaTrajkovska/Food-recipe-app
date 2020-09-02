 import React from 'react'

const MovieInfo =(props)=>{
    console.log(props)
return(
    <div className='container'>
        <div className='row' onClick={props.closeMovieInfo} style={{cursor:"pointer", paddingTop:50}}>
    <i className='fas fa-arrow-left'></i>
    <span style={{marginLeft:10}}>Go back</span>
        </div>
        <div className="row">
            <div className="col s12 m4">
            
          
            </div>
            <div className='col s12 m8'>
    <div className="info-container">
     
           <h1>Title of info</h1>
           <ol>
             {props.currentMovie.recipe.ingredients.map((ingredient)=>(
               <li>{ingredient.text}</li>
             ))}
           </ol>

<p>{props.currentMovie.recipe.label}</p>
<p>{props.currentMovie.recipe.healthLabels}</p>


    </div>
        </div>

</div>
    </div>

)
}
export default MovieInfo
// export default class MovieInfo extends React.Component {
//     state = { showDetails: '' }

//     toggleShowDetails = () => this.setState(prevState => ({ showDetails: !this.state.showDetails }))     

//     render = () => (
//       <div>
//         <h1>{this.props.recipeName} Recipe</h1>
//         <button onClick={this.state.toggleShowDetails}>{`${!this.state.showDetails ? "Show" : "Hide"}`}   Recipe</button>
//         {
//             this.state.showDetails && 
//             <ul>
//                 {this.props.recipeDetail.map(ingredient =>(
//                     <li key={ingredient}>ingredient</li>
//                 ))}
//             </ul>
//         }
//    </div>
        
         
//     )}
        