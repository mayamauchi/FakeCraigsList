import React from 'react'


const Searchbar = (props) => {
    return (
      <div id="Searchbar">
        <div><form
        onSubmit={(e) => {
        e.preventDefault();
        props.setSearchTerm(e.target[0].value);
      }}
      >
        <label>
        <input type ="text" placeholder="Name"/>    
        </label>
        <button>Submit</button>
      </form></div>
      </div>   
  
      
      );
    };
export default Searchbar;