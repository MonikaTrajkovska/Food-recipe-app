
import React  from "react";
 import './Recipe.css'

import RecipeInfo from '../RecipeInfo/RecipeInfo'

class Recipe extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      show: false,
      
     };
 
  }
  setShow = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
render(){
  return(
 
      <div className="column-div">
          <div className='card-div'>
         
           <img src={this.props.image} alt="slika"/>    
            <h1>{this.props.label}</h1>
           
            <div className="paragraph-div">
             <p className="preparation" ><i className="fas fa-balance-scale"></i> Calories:  {Math.round(this.props.calories)}</p> 
            
           
          <p ><i className="fas fa-history"></i> Preparation time:{this.props.totalTime} mins</p>
        
         
            
             </div>
             <p><button  className="button-detail button-detail1" onClick={() => this.setShow(this.state.show)}>READ MORE</button>
      {this.state.show && <RecipeInfo hideModal={this.hideModal} ingredients={this.props.ingredients} label={this.props.label} image={this.props.image} source={this.props.source} servings={this.props.yield} healthLabels={this.props.healthLabels} dietLabels={this.props.dietLabels} url={this.props.url}/>}
      </p> 
     
 
 
   </div>
        

          
    </div>
              
        
      
  )
}}
export default Recipe