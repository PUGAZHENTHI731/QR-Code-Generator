import React from 'react';
function Profile (props){
     return(
          <>
          <div className='container'>
               <span className={props.profile?'person online':'person offline'}>{props.profile?'online':'offline'}</span>
               <div className="image">
                    <img src={props.image} alt="image" />
               </div>
               <div className="box">
                    <h1>{props.name}</h1>
                    <h2>{props.city}</h2>
                    <h5>{props.dept}</h5>
               </div>
               <div className="buttons">
                    <button>Message</button>
                    <button>Following</button>
               </div>
               <ul className="skills">
                    {props.skills.map((skill,index)=>(
                         <li key={index}>{skill}</li>
                    ))}
               </ul>
          </div>
          </>
     );
}

export {Profile}