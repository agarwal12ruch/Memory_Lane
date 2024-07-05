import React, { useState } from 'react'
import MemoryContext from './MemoryContext'
const MemoryState = (props) => {
    const memoryInitial=[
        {
            "key":"123456984s5d4s2e3f1",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"12456984s5d4s2e3f2",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"12345684s5d4s2e3f3",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"123456984s5d4s2e3f4",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
        "key":"123456984s5d4s2e3f5",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"123456984s5d4s2e3f6",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"123456984s5d4s2e3f7",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"123456974s5d4s2e3f8",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        }
    ]
    const [memories,setmemory]=useState(memoryInitial)
  return (
    <MemoryContext.Provider value={{memories,setmemory}}>
        {props.children}
    </MemoryContext.Provider>
  )
}

export default MemoryState;
