import { createContext, useEffect } from 'react';
import { useState } from 'react';


const NoteContext = createContext();
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  async function getData() {
    const url = "https://backend-aqdnyhrw6-vishalucifer-gmailcoms-projects.vercel.app/api/notes/fetchnotes";
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