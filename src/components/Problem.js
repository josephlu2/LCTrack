import React from "react"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Problem = (props) => {
    const [note, setNote] = useState();
    const [checked, setChecked] = React.useState(false);
    
    const handleBlur = () => {
        localStorage.setItem(props.id, note);
        console.log('blur handled')
        toast.success('Successfully Auto-Saved', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            toastId: "success"
            });
    }

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
        <tr className = "prop">
                <td><input 
                    class = "check"
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                </td>
                <td><p className = "prop"><a href={props.url} target="_blank">{props.problem}</a></p></td>
                <td><p className = "prop">{props.difficulty}</p></td>
                <td><p className = "prop">{props.category}</p></td>
                
                <td><input className = "formfield" type="text" value = {note} onBlur = {handleBlur} placeholder="Enter notes here..." onChange = {event => setNote(event.target.value)} /></td>
                
                <button className = "buttonform" onClick={e => {
                    toast.success('Successfully Saved', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        toastId: "success"
                        });
                    e.preventDefault();
                    localStorage.setItem(props.id, note);
                    }}>
                    Save Notes
                </button>
        </tr>
     );
}
 
export default Problem;