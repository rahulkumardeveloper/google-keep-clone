import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

  const[expand,setExpand]=useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const InputEvent = (event) => {
        const {name,value} = event.target;
        setNote((prevalue) => {
            return {
                 ...prevalue,
                  [name]:value 
                };
        });
    }
    const addEvent=()=>{
      props.passNote(note);
      setNote({
        title: "",
        content:"" 
      });
    }

    const expandIt=()=>{
  setExpand(true);
    }
    const backtoNormal=()=>{
        setExpand(false);
    }
    return (
        <>
            <div className="main_note"   onDoubleClick={backtoNormal}>
                <form>
                {expand?
                    <input type="text"
                        name="title"
                        value={note.title}
                        placeholder="Title"
                        autoComplete="off"
                        onChange={InputEvent}
                    />:null }
                    <textarea rows="" colum=""
                        name="content"
                        value={note.content}
                        placeholder="Write a Notes..."
                        onChange={InputEvent}
                        onClick={expandIt}
                      
                    />
                    {expand?
                    <Button className="MuiBotton-root" onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>
                    :null}
                </form>

            </div>
        </>
    )
}

export default CreateNote;