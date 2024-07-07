import React, { useContext, useState } from 'react';
import "./createmem.css";
import Cards from './Cards';
import app from '../firebase';
import MemoryContext from '../Context/Memory/MemoryContext';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Createmem = ({ theme, setTheme }) => {
    const [note, setNote] = useState({ title: "", description: "", tag: "", file: "" });
    const { addNote } = useContext(MemoryContext);
    const [uploading, setUploading] = useState(false);

    const handleChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

   

    const newChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            setUploading(true);
            const storage = getStorage(app);
            const storageRef = ref(storage, "files/" + file.name);
            await uploadBytes(storageRef, file);
            const downloadUrl = await getDownloadURL(storageRef);
            setUploading(false);
            console.log(downloadUrl);
            setNote(prevNote => ({
                ...prevNote, file: downloadUrl
            }));
            setUploading(false);
        }
    };
    const onclick = (e) => {
        e.preventDefault();
        if (!note.title || !note.description || !note.tag) {
            alert("Please fill in all the fields before submitting.");
            return;
        }
        
        addNote(note.title, note.description, note.tag, note.file);
        setNote({ title: "", description: "", tag: "", file: "" });
        console.log(note);
    };

    return (
        <div >
            <div className='container container-form'>
            <h2>Fill the Details</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title for Memory</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder='Your Memories are safe with us.'
                        minLength={3}
                        
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={handleChange}
                        value={note.description}
                        placeholder='Describe your Memory'
                        minLength={3}
                       
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        onChange={handleChange}
                        value={note.tag}
                        placeholder='Provide suitable tag'
                        minLength={3}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">Select Files</label>
                    <input
                        className="form-control"
                        type="file"
                        onChange={newChange}
                        id="formFileMultiple"
                    />
                </div>
                <button  disabled={uploading} type="submit" onClick={onclick} className="btn btn-primary btn-form">{uploading?"Wait":"Submit"}</button>
            </form>
            
        </div>
        <Cards theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default Createmem;
