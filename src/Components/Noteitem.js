import { useContext, useRef, useState } from "react";
import { NoteContext } from "../Contexts/NoteState.js";


function Noteitem(props) {
    const { note } = props;
    const host = 'https://inotebook-backend-glih.onrender.com'
    const [current, setCurrent] = useState({ title: note.title, description: note.description, tags: note.tags });
    const noteContext = useContext(NoteContext);
    const { setNote, getData } = noteContext;
    let deletenote = async (id) => {
        const url = `${host}/api/notes/deletenote/${id}`;
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    "authtoken": localStorage.getItem('token')
                }
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            getData();
            props.alert('Note deleted sucessfully!','danger');
        } catch (error) {
            console.error(error.message);
        }
    }
    const ref = useRef(null);
    const refClose = useRef(null);
    let editnote = async (id) => {
        ref.current.click();
    }
    const onchange = (e) => {
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };
    const saveNote = async () => {
        const url = `${host}/api/notes/updatenote/${note._id}`;
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    "authtoken": localStorage.getItem('token')
                },
                body: JSON.stringify({ title: current.title, description: current.description, tags: current.tags }),
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            getData();
            refClose.current.click();
            props.alert('Note edited sucessfully!',"success");
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <>
            <button type="button" style={{ display: 'none' }} ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${note._id}`}>
                Launch static backdrop modal
            </button>
            <div className="modal fade" id={`staticBackdrop-${note._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Your Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputtext1" className="form-label">Title:</label>
                                    <input type="text" value={current.title} className="form-control" id="exampleInputtext1" name='title' onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputtext2" className="form-label">Description:</label>
                                    <input type="text" value={current.description} className="form-control" id="exampleInputtext2" name='description' onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputtext3" className="form-label">Tags:</label>
                                    <input type="text" value={current.tags} className="form-control" id="exampleInputtext3" onChange={onchange} name='tags' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={saveNote}>Edit Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-md-3 mx-3 my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="float-end">
                        <i className="fa-solid fa-trash" onClick={() => { deletenote(note._id) }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { editnote(note._id) }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem