import React, { useContext, useState } from 'react'
import "./createmem.css"
import Cards from './Cards';
import app from '../firebase';
import MemoryContext from '../Context/Memory/MemoryContext';
import{getDownloadURL, getStorage,ref, uploadBytes}from "firebase/storage"
const Createmem = ({theme,settheme}) => {
    const[note,setnote]=useState({title:"" ,description:"",tag:"",file:""})
    const{addNote}=useContext(MemoryContext);
    const [uploading,setuploading]=useState(false);
    const handleChange=(event)=>{
      setnote({...note,[event.target.name]:event.target.value})
    }
    const onclick=(e)=>{
        e.preventDefault();
        addNote(note.title||"",note.description||"",note.tag||"",note.file||"")
        setnote({title:"",description:"",tag:"",file:""});
        console.log(note);
     

    }
    const newchange=async(e)=>{
        const file=e.target.files[0];
        console.log(file);
        if(file){
            const storage=getStorage(app);
            const storageRef=ref(storage,"files/"+file.name);
            await uploadBytes(storageRef,file);
            const downloadurl=await getDownloadURL(storageRef);
            console.log(downloadurl)
            setnote(prevnote=>({
                ...prevnote,file:downloadurl
            }));
        }
        setuploading(true);

    }
  return (
    <div>
        <div className='container container-form'>
        <h2>Fill the Details</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title for Memory</label>
                <input type="text" className="form-control" id="title" name="title" onChange={handleChange} value={note.title} placeholder='Your Memories are safe with us .'/>
            </div>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description </label>
                    <input type="text" className="form-control" value={note.description} onChange={handleChange}id="description" name="description" placeholder='Describe your Memory'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags </label>
                    <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={handleChange} placeholder='Provide suitable tag'/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Select Files </label>
                <input className="form-control" type="file" onChange={newchange} id="formFileMultiple"  />
            </div>
            <button   type="submit" onClick={onclick}className="btn btn-primary btn-form">Submit</button>
        </form>
        </div>
        <Cards/>
    </div>
  )
}

export default Createmem;
