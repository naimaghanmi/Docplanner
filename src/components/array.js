import React from 'react'

 function array(props) {
    return (
    <ul className="Item">

    {props.arr.map(el=>
    <li  className="lst">{el.img}</li>
        )}
            
        </ul>
    )
}
export default array