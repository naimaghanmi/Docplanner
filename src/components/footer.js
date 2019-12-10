import React from 'react'

function footer(props) {
    return (
        <div className="footer">
<p>We are leaders in 10 countries: 

     {props.H.map(el =>
<a href={el.href}> , {el.txt}</a> )}
            </p>
        </div>
    )
}
export default  footer 