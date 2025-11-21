import { createContext, useEffect } from 'react';
import { useState } from 'react';


const NoteContext = createContext();
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  async function getData() {
    const url = "https://inotebook-backend-glih.onrender.com/api/notes/fetchnote";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "authtoken": localStorage.getItem('token'),
      }})
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      let result = await response.json();
      setNotes(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, [localStorage.getItem('token')])

  return (
    <NoteContext.Provider value={{ notes, setNotes, getData }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export { NoteState, NoteContext };
