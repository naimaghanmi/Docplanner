import React from 'react'

 function secondPart(props) {
    return (
  <div className="Section">
  {props.person.map((el,i) =>
  <div className="Person" style={{backgroundColor: i===0&& '#00CCB1'}}>
   <h2>{el.name}</h2>
   <h3>{el.des}</h3> 
   <select className={el.style}>
     {!el.option ?null:el.option.map(e =>
   
   <option>{e}</option>
  
   )}
   </select>
   <img  src={el.src}/>
    </div>
  
   )
   }
</div>
    )
}
export default secondPart;
