import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import BookForm from './Component/BookForm';

function App() {

  const [data , setData] = useState([]);
  

  useEffect(()=>{
     const func=async()=>{
       axios.get('http://127.0.0.1:3000/api/v1/books').then((res)=>{
       console.log(res.data , 'response');
       setData(res.data);
       });

      //  axios.post('')

      //  const postingData = await fetch(`http://127.0.0.1:3000/api/v1/books.json`,{
      //   method:'POST',
      //   body:JSON.stringify({
      //     id:new Date().getTime()  ,
      //     title:"My Learning 3 book",
      //     body:"flamee of Aokoji",
   
      //   }),
      //   headers:{
      //     'content-type':'application/json'
      //   }
      //  })

      //  const data = await postingData.json;
      // console.log(data, 'is data sended successfuly');  
     }
     func();
  },[])

  const deleteHandler=(item)=>{
   const filterData = data.filter((i)=>i.id!==item.id)
   console.log(filterData , 'filterData')
   axios.delete(`http://127.0.0.1:3000/api/v1/books/${item.id}`).then((e)=>console.log(e)).catch((e)=>console.log(e  , 'at erro'));
    setData(filterData)
  }


  return (
    <div className="App">
    <div className='shelf'>
    <h1>Book Shelf</h1>
    {data.map((i)=>{
      return(
        <div className='bookWrapper'>
        <h1 className='bookTitle'>
          {i.title}
        </h1>
        <p className='bookDescription'>
          {i.body}
        </p>

    <button className='bookDelete' onClick={()=>deleteHandler(i)}>Delete</button>
    
        </div>
      )
    })}
    </div>
 
   <BookForm setData={setData} />
    </div>
  );
}

export default App;
