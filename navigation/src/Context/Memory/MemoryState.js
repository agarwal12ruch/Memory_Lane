import React, { useState } from 'react'
import MemoryContext from './MemoryContext'
const MemoryState = (props) => {
<<<<<<< HEAD
    const host="http://localhost:5000";
    const memoryInitial=[];
    
=======
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
        },
        {
            "key":"123456984s5d4s2e3f9",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        },
        {
            "key":"123456974s5d4s2e3f10",
            "title":"My First Memory",
            "tag":"Daman trip",
            "description":"Was an awesome trip with friends"
        }
    ]
>>>>>>> 1a748c7a3fecb51b176d5b41bc34d524c358bdce
    const [memories,setmemory]=useState(memoryInitial)
    const getallNote=async()=>{
        const token=localStorage.getItem("token");
        const url=`${host}/api/notes/FETCHNOTE`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token // Use the retrieved token here
            },
        });
    
        const json = await response.json();
         console.log(json);
        setmemory(json);

    }
    const addNote=async(title,description,tag,file)=>{
        const url=`${host}/api/notes/newnote`;
        const token=localStorage.getItem("token");
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token // Use the retrieved token here
            },
            body: JSON.stringify({title,description,tag,file}),
        });
    
        const json = await response.json();
         console.log(json);
        setmemory([...memories,json]);

    }
    const deleteNote=async(id)=>{
        const url=`${host}/api/notes/DELETENOTE/${id}`;
        const token=localStorage.getItem("token");
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token // Use the retrieved token here
            },
           
        });
        const deletenote=memories.filter((memories)=>{
            return (memories._id!==id)
        })
        console.log(response);
        setmemory(deletenote)
    
    }
    const updateNote=async(title,description,tag,id,file)=>{
         const url=`${host}/api/notes/UPDATENOTE/${id}`;
         const token=localStorage.getItem("token");
         const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token // Use the retrieved token here
            },
            body: JSON.stringify({title,description,tag,file})
           
        }); 
        const json=await response.json();
        console.log(json);
        for(let i=0;i<memories.length;i++){
            let element=memories[i];
            if(element._id===id){
                element.title=title;
                element.description=description;
                element.tag=tag;
                element.file=file
                
            }
        }  
        }
   
    
    
  return (
    <MemoryContext.Provider value={{memories,setmemory,getallNote,addNote,deleteNote,updateNote}}>
        {props.children}
    </MemoryContext.Provider>
  )
};

export default MemoryState;
