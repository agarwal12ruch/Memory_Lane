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

    const onClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag, note.file);
        setNote({ title: "", description: "", tag: "", file: "" });
        console.log(note);
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
            console.log(downloadUrl);
            setNote(prevNote => ({
                ...prevNote, file: downloadUrl
            }));
            setUploading(false);
        }
    };

    return (
        <div className='container'>
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
                <button type="submit" onClick={onClick} className="btn btn-primary btn-form">Submit</button>
            </form>
            
        </div>
        <Cards theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default Createmem;
