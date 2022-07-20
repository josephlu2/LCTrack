import React from "react"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Problem = (props) => {
    const [note, setNote] = useState();
    const [checked, setChecked] = React.useState(false);
    const toastId = React.useRef(null);

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
                
                <td><input className = "formfield" type="text" value = {note} placeholder="Enter notes here..." onChange = {event => setNote(event.target.value)} /></td>
                
                <button className = "buttonform" onClick={e => {
                    if(toast.isActive(toastId.current)) {
                        
                      } else {
                        console.log('test')
                        toast.success('Successfully Saved', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            toastId: "success"
                            });
                      }
                    e.preventDefault();
                    localStorage.setItem(props.id, note);
                    }}>
                    Save Notes
                </button>
        </tr>
     );
}
 
export default Problem;