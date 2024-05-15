import { ChevronRightIcon, LandmarkIcon, LayoutDashboard, LayoutDashboardIcon, Link, Menu, MoveLeft, NotebookText } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Form from './Form'

function Sidebar() {
  const[isOpen,setIsOpen] = useState(true);
  useEffect(()=>{
     if(window.innerWidth<640) setIsOpen(false);
     else setIsOpen(true);
  },[])
  const handleSidebar = ()=>{
    if(window.innerWidth<640)
      {
         setIsOpen(!isOpen);
      } 
  }
  return (
    <div className='sm:flex relative'>
      <div className='sm:border-slate-200 sm:border-r-2'>
        <a className='cursor-pointer' onClick={handleSidebar}> {isOpen ?  <MoveLeft className='m-4' color='black' size={30}/> :  <Menu className='m-4' color='black' size={30}/>} </a>
       {isOpen &&   
        <div className='p-8 sm:p-0 border-t sm:border-t-0 border-slate-400 z-10 sm:z-0 absolute sm:relative bg-white w-[100%] h-[1080px] sm:w-auto sm:h-auto'>
        <a className='border-b sm:border-b-0 flex my-4 sm:m-2 justify-between sm:w-64 p-2 cursor-pointer'> <p className='flex'> <LayoutDashboardIcon className='sm:mx-4' color='black' size={30}/> My Dashboard</p> <ChevronRightIcon className='' color='black' size={30}/> </a>
        <a className='border-b sm:border-b-0 flex my-4 sm:m-2 justify-between sm:w-64 p-2 cursor-pointer'> <p className='flex'><Link className='sm:mx-4' color='black' size={30}/> TOTM links</p> <ChevronRightIcon className='' color='black' size={30}/> </a>
        <a className='border-b sm:border-b-0 flex my-4 sm:m-2 justify-between sm:w-64 p-2 cursor-pointer'> <p className='flex'> <NotebookText className='sm:mx-4' color='black' size={30}/> Daily Summary</p> <ChevronRightIcon className='' color='black' size={30}/> </a>
        <a className='border-b sm:border-b-0 flex my-4 sm:m-2 justify-between sm:w-64 p-2 bg-gray-100 cursor-pointer'> <p className='flex'> <LandmarkIcon className='sm:mx-4' color='black' size={30}/> Bank Deatils</p> <ChevronRightIcon className='' color='black' size={30}/> </a>
        </div>
        }
    </div>  
    <div className='sm:flex -z-10 sm:z-0 absolute sm:relative'>
      <Form/>
    </div>
    </div>
  )
}

export default Sidebar