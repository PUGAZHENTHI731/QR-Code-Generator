import React from 'react';
import {Greet,Map_array} from './components/display.jsx';
import {Students} from './components/studens.jsx'
import {Profile} from './components/profile-comoponent.jsx'

function App() {
  let lst = [10,20,30,40,50,60];
  let students_details =[{name:'joen',age:23,ismarride:true},{name:'dinesh',age:43,ismarride:false},{name:'mani',age:20,ismarride:true}];

  let info = [
  {name:'pugal',dept:'web develoer',profile:true,image:'public/img/1.jpg',city:'alangudi',skills:['java','python','html','css','javascript','react']},
  {name:'mani',dept:'frontend develoer',profile:true,image:'public/img/2.jpg',city:'pudukkottai',skills:['java','python','html','css','javascript']},
  {name:'dinesh',dept:'web develoer',profile:true,image:'public/img/3.jpg',city:'machuvati',skills:['java','python','html']},{name:'manickam',dept:'backend develoer',profile:false,image:'public/img/1.jpg',city:'ponamaravathi',skills:['java','python','javascript']}]
  return (
    <>
     {/* <Greet />
    <Map_array items={lst}/>
    <Students students={students_details}/> */}
    {info.map(item=>(
      <Profile name={item.name} dept={item.dept} profile={item.profile} image={item.image} city={item.city} skills={item.skills}/>
    ))}
     {/* <Profile/> */}
    </>
  );
}
export default App;
