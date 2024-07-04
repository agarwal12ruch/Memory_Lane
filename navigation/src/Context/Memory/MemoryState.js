import React from 'react'
import MemoryContext from './MemoryContext'
const MemoryState = (props) => {
    const state={
        "Title":"My First Memory",
        "Tag":"Daman trip",
        "Description":"Was an awesome trip with friends"
    }
  return (
    <MemoryContext.Provider value={{state}}>
        {props.children}
    </MemoryContext.Provider>
  )
}

export default MemoryState;
