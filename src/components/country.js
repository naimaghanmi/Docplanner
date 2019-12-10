import React from 'react'

 function country(props) {
    return (
        <div className="Country">
       {props.country.map(el =>
       <div className="cont">
        <img src={el.src}/>
        <div className="barEnd">
        <p>{el.text}</p>
       <button>{el.type}</button>
        </div>
      </div>
        
        )}     
        </div>
    )
}
export default country