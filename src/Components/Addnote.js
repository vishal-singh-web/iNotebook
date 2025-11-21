import React, { useContext, useState } from 'react'
import { NoteContext } from '../Contexts/NoteState.js';

function Addnote(props) {
    const noteContext = useContext(NoteContext);
    const { notes, setNotes } = noteContext;
    const [note, setnote] = useState({ title: '', description: '', tags: 'default' })
    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const handleclick = (e) => {
        e.preventDefault();
        async function getData() {
            const url = "https://inotebook-backend-glih.onrender.com/api/notes/addnote";
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        "authtoken": localStorage.getItem('token')
                    },
                    body: JSON.stringify({ title: note.title, description: note.description, tags: note.tags }),
                })
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                let result = await response.json();
                setNotes([...notes, result]);
                setnote({ title: '', description: '', tags: 'default' });
                props.alert('Note added Successfully','success');
            } catch (error) {
                console.error(error.message);
                props.alert('Info not valid, please try again','danger');
            }
        }
        getData();
    }

    return (
        <>
            <div className='container'>
                <div className="container my-3">
                    <h1>Add a note</h1>
                </div>
                <form onSubmit={handleclick}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtext1"  className="form-label">Title:</label>
                        <input type="text" className="form-control"value={note.title} id="exampleInputtext1" name='title' onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtext2" className="form-label">Description:</label>
                        <input type="text" value={note.description}className="form-control" id="exampleInputtext2" name='description' onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtext3" value={note.description} className="form-label">Tags:</label>
                        <input type="text" className="form-control" id="exampleInputtext3" onChange={onchange} name='tags' />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </>
    )
}

export default Addnote