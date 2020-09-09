import React from 'react'
import Nav from './Nav/Nav'
import Search from './Search/Search'
 import RecipeList from './RecipeList/RecipeList'
 import {v4 as uuidv4} from "uuid"

 import RecipeInfo from './RecipeInfo/RecipeInfo'


class App  extends React.Component{
    componentWillMount() {  
        this.id = uuidv4();  
      }  
    constructor(){
        super()
        
        this.state={
            recipes:[],
             searchTerm:'',
             query:'',
             hits:[],
             ingredients:[],
            showModal:null,
            
           

        }
      
       
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
 


 
  

    render(){
        
        // console.log(this.state.hits)
        // console.log(this.state.recipes)
       
      
        return  (
            <div className='main-page'>

<Nav/>
<div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
<RecipeList   recipes={this.state.recipes} id={uuidv4()} /></div>
 />




            </div>
        )
    }
}

export default App