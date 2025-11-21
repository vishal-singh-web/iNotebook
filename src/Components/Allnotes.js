import React, { useContext, useEffect } from 'react'
import { NoteContext } from '../Contexts/NoteState.js';
import Noteitem from './Noteitem.js'

function Allnotes(props) {
  const noteContext = useContext(NoteContext);
  const { notes,getData } = noteContext;
  useEffect(()=>{
    getData();
  },[])
  
  
  return (
    <div className='container'>
      <div className="my-3">
        <h1>Your Notes:</h1>
      </div>
      <div className="row my-3">
        {notes.length==0 && <div>Add a note to display here...</div>}
        {notes.map((a) => {
          return <Noteitem key={a._id} note={a} alert={props.alert}/>
        })}
      </div>
    </div>
  )
}

export default Allnotes;
