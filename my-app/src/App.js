
// import React from 'react'
// // import {BrowserRouter , Routes } from "react-router-dom"
// import Practice from './Component.js/Practice'
// import App from './App.css'
//  const App = () => {

//   const [input, setInput] = useState({
//     name:'',
//     rollno:'',
//   })
//   const [data, setData] = useState([])

//   const handleChange=(e)=>{
//     setInput({...input, name: e.target.value})
//   }
//   const handleChange1=(e)=>{
//     setInput({...input, rollno: e.target.value})
//   }


//   const handleclick=()=>{
//     setData([...data,input])
//     setInput('')
//   }
//   const handleRemove=(value)=>{
//    setData(data.filter((i,idx) => idx !== value))
//  }
 
//   return (
//    <div className='bg-green-200  h-[100vh] w-[100%]'>
// {/* <BrowserRouter>
// <Routes>
//   <route path="/Props"element= {<props/>}></route>
// </Routes>
// </BrowserRouter>  */}


//     <h1 className='text-5xl flex justify-center text-black '><b>To Do List</b></h1>
//     <br></br>
//     <div className='text-2xl ml-[78vh]'>
//     <lable className='text-black mr-5' >NAME - </lable>
//     <input  className ='text-black  border-2 border-black'type='text' value={input.name} placeholder='Enter Name' onChange={(e)=>{handleChange(e)}}></input>
//   </div>
//     <br></br>
//     <div className='text-2xl ml-[77vh]'>
//     <lable className='text-black mr-5  ' >Roll no  - </lable>
//     <input  className ='text-black  border-2 border-black'type='number' value={input.rollno} placeholder='Enter Roll number' onChange={(e)=>{handleChange1(e)}}></input>
//     </div>
//   <br></br>
  
    
// <button  className='bg-white px-10 mt-10 ml-[97vh] border-2 border-black'  onClick={()=>{handleclick()}}>Add</button>

// {
//   data.map((i,idx)=>{
//     return (
//       <div >
//         <div className=' text-black text-5xl mt-10  ml-[95vh]'> {idx + 1}. {i.name}   {'  '}
//         {i.rollno}
//         </div>

      
//       <button className=' text-black text-2xl mt-10 bg-white ml-[98vh] border-black border-2 rounded-lg ' onClick={()=>{handleRemove(idx)}}>Remove</button>
//       </div>
//     ) 
//   })
// }


//     </div>
 
//   )
//  }

// export default App

import index from './index.css'
import React, { useState , useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const App = () => {
  const [radioshow, setRadioshow] = useState(false)
  const [radioactor, setradioActor] = useState(false)
  const [show, setShow] = useState([])
  const [data, setData] = useState([])
  // const [actor, setActor] = useState([])
  // const [data1, setData1] = useState([])
  const [search, setSearch] = useState('')



  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/${search}?q=${show}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) =>{
        console.log(error)
      })
  }, [search,show])

  // useEffect(() => {
  //   fetch(`https://api.tvmaze.com/search/people?q=:${actotr}`)
  //     .then(response => response.json())
  //     .then(json => setData1(json))
  // }, [actor])
  // useEffect(() => {
  //   fetch(`https://api.tvmaze.com/search/people?q=:${actor}`)
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, [actor])
  
  const Changeradio=(data)=>{
    if(data === "Actor"){
    setradioActor(true)
    setRadioshow(false)
    setSearch('people')
    setShow('')
  }
  else if(data === "Shows"){
    setradioActor(false)
    setRadioshow(true)
    setSearch('shows')
    setShow('')
  }
}
  const slides = [
    {
      url: 'https://image.tmdb.org/t/p/original/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg',
      name:'Secret Headquaters',
    },
    {
      url:'https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
      name:'Black Adam',
    },
    {
      url: 'https://image.tmdb.org/t/p/original/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg',
      name:"Elric's Brother"
    },

    {
      url: 'https://image.tmdb.org/t/p/original/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg',
      name:"Hocus Pocus 2"
    },
    // {
    //   url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
 const handleChange1 = (e)=>{
      setShow([e.target.value])
 }
 console.log(data)
  return (
  <div>
      <div className='bakgrond flex justify-center'></div>
        <div className='overlay'></div>
        <div className=' logo flex items-center border-2 border-white h-[16vh] w-[42vh] pl-6 rounded-3xl top-16 left-96 ml-52'>
              <div className='text-3xl font-semibold text-[#212529]'>TV MAZE</div>
              <div className='img1 h-[] w-32'></div>
        </div>
       <div className='absolute top-52 left-96 ml-44'> <h2 className='text-white text-3xl font-semibold '>Your Personal Movie Guide</h2></div>

    <div className=' div1 '> 
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url}) `}}
        
        className='w-60% h-[100vh] rounded-2xl bg-center bg-cover ml-32 mr-32'
      > 
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-60 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-60 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
       </div>
       <span className='title flex text-border text-border-red-900 text-border-size-2 justify-center   imagesname'>{slides[currentIndex].name}</span>

  
    </div> 
    <div className='flex justify-center items-center' >
      <div className=' p-3 pl-24 m-10 w-[40vh] rounded-2xl bg-[rgb(117,163,178,0.9)] hover:shadow-2xl hover:shadow-white border-white border-2'>
      <lable>Actor</lable>
      <input  type='radio' checked={radioactor} onClick={()=>{Changeradio('Actor')}}></input>

       <lable>show</lable>
      <input type='radio' checked={radioshow} onClick={()=>{Changeradio("Shows")}} ></input>
      </div>
      </div>

    { radioactor ? ( <input  type='text' value={show} placeholder='Enter actor name...'  onChange={(e)=>{handleChange1(e)}} className='rounded-3xl w-[80vh] p-2 ml-[65vh]' />) :
     (<input  type='text' value={show} placeholder='Enter show name...'  onChange={(e)=>{handleChange1(e)}} className='rounded-3xl w-[80vh] p-2 ml-[65vh]' />)
    }


      
      <div className='grid grid-cols-4 '>
      {
        data.map((i)=>{
          return(
            <div className='h-[50vh] w-[40vh] bg-yellow-200 m-5 rounded-xl p-1 text-2xl  '>
           <img className='h-[40vh] w-full' src={i.show?.image?.medium == undefined ?  i.person?.image?.medium : i.show?.image?.medium } alt=''></img>
              {i.show?.name !== undefined ? i.show?.name : i.person?.birthday}
              <br></br>
              {i.show?.rating?.average !== undefined ? i.show?.rating?.average : i.person?.name}
              
            </div>
          )
        })
      }
      </div>
      {/* <div className='grid grid-cols-3 '>
      {
        data1.map((i)=>{
          return(
            <div className='h-[50vh] w-[40vh] bg-yellow-200 m-5 rounded-xl p-1 text-xl'>
           <img className='h-[40vh] w-full' src={i.person?.image?.medium} alt=''></img>
           {i.person?.birthday}
           <br></br>
              {i.person?.name}

              
              
              
            </div>
          )
        })
      }
      </div> */}  
      
      
       <div className='cas1'>


       </div>

  </div>
</div>
  )
}

export default App

