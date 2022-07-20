import React from "react"
import { useState, useEffect } from "react"

const Problem = (props) => {
    const [note, setNote] = useState();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        localStorage.setItem(props.id + "c", !checked);
        console.log(checked);
      };

    useEffect(() => {
        setNote(localStorage.getItem(props.id));
        if (localStorage.getItem(props.id + "c") === "true") {
            setChecked(true);
        } else {
            setChecked(false);
        }
        console.log(checked);
    }, []);

    useEffect(() => {
        console.log(props.id, checked, '-has changed');
    }, [checked]);

    useEffect(() => {
        console.log(props.id, note, '-has changed');
    }, [note]);


    return ( 
        <div className="problem">
            <form className = "prop">
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <p className = "prop">{props.problem}</p>
                <p className = "prop">{props.difficulty}</p>
                <p className = "prop">{props.category}</p>
                
                <input className = "formfield" type="text" value = {note} placeholder="Enter notes here" onChange = {event => setNote(event.target.value)} />
                
                <button onClick={e => {
                    e.preventDefault();
                    localStorage.setItem(props.id, note);
                    console.log('saved')
                    }}>
                    Save
                </button>
            </form>
        </div>

     );
}
 
export default Problem;