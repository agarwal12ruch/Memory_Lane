import React, { useContext, useRef, useState,useEffect } from 'react';
import './cards.css';
import MemoryContext from '../Context/Memory/MemoryContext';
import Carditem from './Carditem';
import app from "../firebase"
import{getDownloadURL, getStorage,ref, uploadBytes}from "firebase/storage"
import { useNavigate } from 'react-router-dom';

const Cards = ({theme}) => {
    
  const context = useContext(MemoryContext);
  const[uploading,setUploading]=useState(false);
  const Navigate=useNavigate();
  const { memories,getallNote,updateNote } = context;
  const [memory, setMemory] = useState({ etitle: "", edescription: "", etag: "" ,efile:""});
  useEffect(() => {
    const val=localStorage.getItem("token");
    if(val) {
      getallNote();
    } 
    else{
      console.log("token in notes not found")
      Navigate("/login");
    }
  
    
  }, [])
  
  const ref1 = useRef(null);
  const ref2=useRef(null);

  const updateCard = (currentMemory) => {
    ref1.current.click();
    setMemory({ etitle: currentMemory.title, edescription: currentMemory.description, etag: currentMemory.tag,id:currentMemory._id ,efile:currentMemory.file});
  };

  const handleClick =async (e) => {
    e.preventDefault();
    ref2.current.click();
    try {
      await updateNote(memory.etitle,memory.edescription,memory.etag,memory.id,memory.efile);
      setMemory({ id: "", etitle: "", edescription: "", etag: "",efile:""});
    } catch (error) {
      console.error("failed to update note",error.message)
    }
    
  };

  const onChange = (e) => {
    setMemory({ ...memory, [e.target.name]: e.target.value });
  };
  const newchange=async(e)=>{
    const file=e.target.files[0];
    console.log(file)
    if(file){
      const storage=getStorage(app);
      setUploading(true);
      const storageRef=ref(storage,"files/"+file.name)
      await uploadBytes(storageRef,file);
      const downloadurl=await getDownloadURL(storageRef);
      setUploading(false);
      console.log(downloadurl)
      setMemory(prevnote=>({
        ...prevnote,efile:downloadurl
      }))
    }
  }

  return (
    <div>
      <button type="button" ref={ref1} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">Edit Memories</h5>
              <button type="button" ref={ref2}className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='description-modal description'>
                    <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title for Memory</label>
                    <input type="text" className="form-control" onChange={onChange} value={memory.etitle} id="etitle" name="etitle" placeholder="Your Memories are safe with us." />
                    </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tags</label>
                    <input type="text" className="form-control" onChange={onChange} value={memory.etag} id="etag" name="etag" placeholder="Provide suitable tag" />
                  </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={onChange} value={memory.edescription} id="edescription" name="edescription" placeholder="Describe your Memory" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">Select Files</label>
                  <input className="form-control" onChange={newchange} type="file" id="formFileMultiple" name="formFileMultiple"  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={uploading} onClick={handleClick} type="button" className="btn btn-primary">{uploading?"Wait":"Update memories"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3 '>
        <h2>Saved Memories</h2>
        {memories.map((card) => {

          return <Carditem key={card.key} updateCard={updateCard} card={card} file={card.file}/>;

          
        })}
      </div>
    </div>
  );
};

export default Cards;
