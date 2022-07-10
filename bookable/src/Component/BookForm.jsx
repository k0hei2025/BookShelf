import axios from 'axios'
import React, { useRef } from 'react'

export default function BookForm(props) {

    const titleRef = useRef('');
    const descriptionRef = useRef('');
    

    const submitHandler=(event)=>{
        event.preventDefault();
        const data = {
            // id:new Date().getTime(),
            title: titleRef.current.value,
            body: descriptionRef.current.value,
         
        }
        

        console.log( data , 'data of inputs');

       axios.post('http://127.0.0.1:3000/api/v1/books.json',
       data).then((e)=>console.log(e.data , 'data is data') ).catch((e)=>console.log(e , 'error'));
    axios.get('http://127.0.0.1:3000/api/v1/books').then((res)=>{

        console.log( res , 'response');
        props.setData(res.data);
        });    
}
  return (
   <form onSubmit={submitHandler}>
   <input type='text' ref={titleRef} placeholder='Enter Book Title' />
   <input type='text' ref={descriptionRef} placeholder='description' />
   <input type='submit' />
   </form>
  )
}
