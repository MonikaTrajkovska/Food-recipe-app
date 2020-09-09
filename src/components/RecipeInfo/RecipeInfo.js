
import React from "react";

import './RecipeInfo.css'

const RecipeInfo = ({ ingredients,label,image,source,servings,healthLabels,dietLabels,url,hideModal }) => {
   
  
    return (
      <div>
        <div id="alert">
        <div id="alert-container">
        <div id="alert-text-container"> 
           
        <img src={image} alt="slika"/>      
     <h1 >{label}</h1>
     <div className="paragraph-by">By  {source}</div>

    <h2>Ingredients</h2>
    <div className="serves-div"><i class="fas fa-info"></i>  With this ingredients you will make {servings} foodies</div>
     <ul className="ingredient-list">
            {ingredients.map((ingredient)=>(          
                    <li className="ingredient-text"><i class="far fa-arrow-alt-circle-right"></i>  {ingredient.text}</li>
             ))}
            </ul>
            {healthLabels.length > 0 ? (
            <p className='label-container'><i class="fas fa-check"></i>  Health Labels: {healthLabels.map((label) => label + ", ")}
            </p>
          ) : null}
 {dietLabels.length > 0 ? (
            <p className='label-container'><i class="fas fa-check"></i> Diet Labels:  {dietLabels.map((labels) => labels + ", ")}
            </p>
          ) : null}

<a href={url} target="blank" role="button">View Original Recipe</a>
<div id="alert-buttons">
                <button className="alert-btn" id="cancel-alert-btn" onClick={hideModal}
                >CANCEL</button>
                </div>
            </div>
 
</div>
</div>
</div>
        );
  }


export default RecipeInfo;