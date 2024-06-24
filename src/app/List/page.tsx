'use client'
import React, { useEffect, useState } from 'react'
import '../globals.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import Image from 'next/image'

function page() {
  const url = 'http://localhost:4000'
  const [list, setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }
  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className='list w-full flex flex-col px-20 py-10'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format w-full">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format title bg-[#f9f9f9]'>
              <Image src={`${url}/images/`+ item.image} width={400} height={400} alt=''></Image>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
