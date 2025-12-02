import React from 'react';
function Greet (){
     return(
          <>
          <h1>Hello world</h1>
          <p>This is a paraghraph tag</p>
          </>
     )
}

let Map_array =(props)=>{
     return(
          <ul>
          {props.items.map((item,idx)=>(
               <li key={idx}>{item}</li>
          ))}
          </ul>
     )
}
export  {Greet,Map_array};