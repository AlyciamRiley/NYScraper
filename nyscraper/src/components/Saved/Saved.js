import React from "react";
import "./Saved.css";


const Saved = () => (
 <div classNameName="saved">
   

   <div className="card">
   <p id="results">Saved</p>
     <div className="card-body" id="card">
   
      <a href="/" className="card-link">Saved Articles Here</a>
      {/* Use map function to iterate over results */}
   
       <button class="btn btn-primary" type="submit">Remove</button>
   
   
   </div>
   </div>
   </div>
    );
    

export default Saved;