import React from 'react'
import Nav from './Nav'
import Search from './Search'
 import MovieList from './MovieList'
// import Pagination from './Pagination'
 import MovieInfo from './MovieInfo'
import Movie from './Movie'
import './App.css'
class App  extends React.Component{
    constructor(){
        super()
        this.state={
            recipes:[],
             searchTerm:'',
             query:'',
             hits:[],
             ingredients:[],
             isLoaded:false,
             totalResults:0,
            currentPage:1,
             currentMovie:null,
            showModal:null

        }
        // this.apiKey=process.env.REACT_APP_API
    }
    extractIdFromUri = (uri) => {
        return uri.split('#recipe_').pop()
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=${'f7d48a86'}&app_key=${'2881e4a6866f6075e6c3a6c715d79944'}`)
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            
            this.setState({recipes:[...data.hits]})
        })
    }
     handleChange=(e)=>{
        this.setState({searchTerm:e.target.value})
 }
 
    // nextPage=(pageNumber)=>{
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    //     .then(data=>data.json())
    //     .then(data=>{
    //         console.log(data)
    //         this.setState({movies:[...data.results], currentPage:pageNumber})
    //     })
    // }
 
    
    // viewRecipeInfo=(label)=>{
    //     const filterRecipe=this.state.recipes.map(recipe => recipe.recipe.label=== label)
    //     const newcurrentRecipe=filterRecipe.length > 0 ? filterRecipe[0] : null;
    //     this.setState({ currentRecipe : newcurrentRecipe})
    // }
 
      viewMovieInfo=()=>{
         
         const filteredMovie =this.state.recipes.filter(recipe=>recipe=== recipe)

       const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
       this.setState({currentMovie : newCurrentMovie})
  }

     closeMovieInfo=()=>{
  this.setState({currentRecipe:null})
    }


    render(){
        
        console.log(this.state.hits)
        console.log(this.state.recipes)
        // const numberPages=Math.floor(this.state.totalResults / 20);
        return  (
            <div className='main-page'>

<Nav/>
{this.state.currentMovie == null ? <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} recipes={this.state.recipes} /></div>
: <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}  />}


{/* {this.state.totalResults  > 20 && this.state.currentMovie == null   ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}  /> : ''} */}
 {/* <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>  */}
{/* {this.state.recipes && this.state.recipes.length > 0  && this.state.recipes.map((recipe)=>(
   
   <Movie recipes={this.state.recipes}/>
    )  */}

    {/* // <Movie key={recipes.recipes.label} title={recipes.recipes.label} calories={recipes.recipes.calories}/>:(
    // <div>Loading... </div> */}
)}
 {/* <MovieList recipes={this.state.recipes} viewMovieInfo={this.viewMovieInfo} /> 
 <MovieInfo recipes={this.state.recipes} closeMovieInfo={this.closeMovieInfo}/> */}
 {/* <MovieList recipes={this.state.recipes} /> 
 {this.state.recipes.map(({recipeName,recipeId,recipeDetail})=>
(
    <MovieInfo key={recipeId} recipeName={recipeName}recipeDetail={recipeDetail}/>
)
 )} } */}

            </div>
        )
    }
}

export default App