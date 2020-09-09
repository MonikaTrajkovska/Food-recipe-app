import React from 'react'
import './Search.css'

const Search= (props)=>{
    return(
        <div className="search">
        
              
                   
                        <div className="search-container"> 
                        <form action="" onSubmit={props.handleSubmit}>
                            <input placeholder="Search Recipe..." type="text" name="search" onChange={props.handleChange}/>
                            <button type="submit">Search</button>
                            </form>
                        </div>
                   
                
           
        </div>
    )
}

export default Search 