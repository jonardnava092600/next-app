'use client'

import LoadData from '@/app/backend/LoadData';
import React, { useEffect, useState } from 'react'

type Products = {
  id:string;
  title:string;
  description:string;
  category:string;
  price:number;
  rating:number
  images:string;
}



const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        LoadData("https://dummyjson.com/products").then((data) => {
          setProducts(data.products ?? [])
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);
  return (
    <>

    <div className='p-3 shadow-lg flex justify-end sticky top-0 z-50 bg-base-300'>
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
    </div>
    <div className='p-3'>
      {isLoading?
      (
      <div className='grid grid-cols-3 gap-4'>
        {Array.from({length: 10}).map((_, i)=> <div key={i} className='card bg-base-200 shadow-xl animate-pulse'>
        <figure className='bg-[currentColor]/10'>
          <img className='opacity-0' src="product-icon.jpg" alt="" />
        </figure>
        <div className='card-body justify-between'>
          <div>
            <h1 className='mt-2 card-title h-4 bg-[currentColor]/10 rounded-box w-[70%]'></h1>
            <div className='mt-4'>
              <div className='mt-2 h-3 bg-[currentColor]/10 rounded-box w-[90%]'></div>
              <div className='mt-2 h-3 bg-[currentColor]/10 rounded-box w-[95%]'></div>
              <div className='mt-2 h-3 bg-[currentColor]/10 rounded-box w-[40%]'></div>
              <div className='mt-2 h-3 bg-[currentColor]/10 rounded-box w-[70%]'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='mt-2 h-4 bg-[currentColor]/10 rounded-box w-[30%]'></div>
            <div className='mt-2 h-9 bg-[currentColor]/10 rounded-[8] w-[30%]'></div>
          </div>
        </div>
      </div>)}
      </div>

      
      ):(products.length <= 0?(
          <div className='grid place-items-center h-[80vh]'>
              <p>No Data</p>
          </div>
      ):(<div className='grid grid-cols-3 gap-4'>

        

        {
      products.map((p) => 
      <div key={p.id} className='card bg-base-200 shadow-xl'>
        <figure>
          <img className='bg-white'
            src={p.images[0]??""}
            alt="Product Icon" />
        </figure>
        <div className='card-body'>
          <h1 className='card-title'>{p.title??""}</h1>
          <p>{p.description??""}</p>
          <div className='flex flex-row'>
            <p>{p.price??0}</p>
            <button className='btn bg-base-100'>View</button>
          </div>
        </div>
      </div>
      
    )
    }</div>))}
    </div>
    </>
    
  )
}

export default ProductsPage