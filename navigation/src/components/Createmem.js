import React from 'react'
import "./createmem.css"
import Cards from './Cards';

const Createmem = ({theme,settheme}) => {
  
  return (
    <div>
        <div className='container container-form'>
        <h2>Fill the Details</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title for Memory</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Your Memories are safe with us .'/>
            </div>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description </label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Describe your Memory'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags </label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Provide suitable tag'/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Select Files </label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <button type="submit" className="btn btn-primary btn-form">Submit</button>
        </form>
        </div>
        <Cards/>
    </div>
  )
}

export default Createmem;
