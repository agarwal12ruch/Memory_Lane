import React from 'react'
import "./createmem.css"
const Createmem = ({theme,settheme}) => {
  return (
    <div className='container'>
      <h2>Fill the Details</h2>
      <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title for Memory</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Your Memories are safe with us .'/>
        </div>
        <div className='description'>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description </label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Describe your Memory'/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tags </label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Provide suitable tag'/>
            </div>
        </div>
        <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Select Files </label>
            <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
       </form>
    </div>
  )
}

export default Createmem
