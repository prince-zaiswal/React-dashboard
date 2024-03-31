import React from 'react'

// Hardware data 
import { software } from '../data/DesignData';

function Software() {
  return (
    <div className='p-3 md:p-0'>
      <h2 className='font-medium text-xl text-black mt-5'>Software</h2>
      <h3 className='font-medium text-gray-400 text-[14px]'>Designing - Software</h3>

      {/*  Software  */}
      <div className="bg-white rounded-lg py-4 my-1">
        <div className="py-4 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Software Information</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {software.map((component) => (
              <li key={component.name} className={`shadow    rounded-md overflow-hidden p-4 gap-2 ${
                component.status === "High" ? "bg-green-100" :
              component.status === "Medium" ? "bg-yellow-100" :
              component.status === "Low" ? "bg-pink-100" :
                null
              }`}>
                
                <div className='flex justify-between items-center pb-2 border-b border-gray-200'>
                <div className="flex flex-col justify-between ">
                  <div className="text-lg font-medium w-11/12">{component.name}</div>
                  <span className="text-gray-700 text-sm font-medium">Type : {component.type}</span>
                </div>

                <div>
                  <span className={`relative inline-block px-3 py-1 font-semibold  leading-tight ${
               component.status === "High" ? "text-green-500" :
               component.status === "Medium" ? "text-yellow-500" :
               component.status === "Low" ? "text-pink-500" :
                null
              }`}>
                    <span className={`absolute inset-0  opacity-50 rounded-full ${
              component.status === "High" ? "bg-green-200" :
              component.status === "Medium" ? "bg-yellow-200" :
              component.status === "Low" ? "bg-pink-200" :
                null
              }`}></span>
                    <span className="relative">{component.status}</span>
                  </span>
                </div>
                </div>
                  <p className="text-gray-700 mt-3"><span className='text-black font-semibold pe-3'> Brief :</span> {component.description}</p>

              </li>

            ))}
          </ul>
        </div>


      </div>
      {/*  Software  */}

    </div>
  )
}

export default Software
