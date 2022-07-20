import React from "react"

const Problem = (props) => {
    return ( 
        <div className="problem">

            <h1 className = "prop">{props.problem}</h1>
            <p className = "prop">{props.difficulty}</p>
            <p className = "prop">{props.category}</p>
            <form className = "prop">
                <input className = "formfield" type="text" placeholder="Enter your answer here" />
            </form>

        </div>

     );
}
 
export default Problem;