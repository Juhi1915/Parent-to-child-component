import React from 'react'



const Child =(props) => {
return(
    <div className="centerClass">
        <button onClick={props.handleEvent}><h1>{props.title}</h1></button>
    </div>
)
}

export default Child;