import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../src/components/assets/logo_light.png'
<<<<<<< HEAD
import MemoryContext from '../Context/Memory/MemoryContext';
=======
import './carditem.css'
>>>>>>> 1a748c7a3fecb51b176d5b41bc34d524c358bdce
const Carditem = (props) => {
    const {card , updateCard}=props;
    const {deleteNote}=useContext(MemoryContext);
    const deleteitem=()=>{
   console.log("note delete with id :"+card._id);
   deleteNote(card._id);
    }
    
  return (
<<<<<<< HEAD
    <div className='col-md-3'>
        <div className="card my-3">
            {props.file ?( <img src={props.file} className="card-img-top" alt={Logo} />):(<img src={Logo} className="card-img-top" alt={Logo} />)}
=======
    <div className='col-md-3 div1'>
        <div className="card my-3 ">
            <img src={Logo} className="card-img-top" alt="..." />
>>>>>>> 1a748c7a3fecb51b176d5b41bc34d524c358bdce
            <div className="card-body">
                <h5 className="card-title card-text">{card.title} ({card.tag})</h5>
                <p className="card-text">{card.description}</p>
<<<<<<< HEAD
                <button className="btn btn-primary"onClick={deleteitem} >Delete</button>
                <button className="btn btn-primary mx-3" onClick={()=>{updateCard(card)}}>Edit</button>
=======
                <div className='edit-btn'>
                  <Link to="#" className="btn btn-primary">Delete</Link>
                  <Link to="#" className="btn btn-primary mx-3" onClick={()=>{updateCard(card)}}>Edit</Link>
                </div>
>>>>>>> 1a748c7a3fecb51b176d5b41bc34d524c358bdce
            </div>
        </div>
    </div>
  )
}

export default Carditem
