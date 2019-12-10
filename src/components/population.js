import React from 'react'
 function population(props) {
    return (
 <div className="coll">
{props.pop.map(el => 
<div className="col-1">
<img src={el.src}/>
<h4>{el.head}</h4>
<p>{el.des}</p>
</div>
      )}
 </div>  
    )
}

export default population