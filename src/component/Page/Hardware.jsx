import React from 'react';

// Hardware data 
import { hardware} from '../data/DesignData';

function Hardware() {
  return (
    <div className='p-3 md:p-0'>
      <h2 className='font-medium text-xl text-black mt-5'>Hardware</h2>
      <h3 className='font-medium text-gray-400 text-[14px]'>Designing - Hardware</h3>

      {/*  Hardware  */}
      <div className="bg-white rounded-lg py-4 my-1">
        <div className="py-4 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Hardware Information</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {hardware.map((component) => (
              <li key={component.name} className={`shadow    rounded-md overflow-hidden p-4 gap-2 ${
                component.status === "Testing" ? "bg-green-100" :
                component.status === "Approved" ? "bg-violet-100" :
                component.status === "Process" ? "bg-yellow-100" :
                component.status === "Review" ? "bg-pink-100" :
                null
              }`}>
                
                <div className='flex justify-between items-center pb-2 border-b border-gray-200'>
                <div className="flex flex-col justify-between ">
                  <div className="text-lg font-medium w-11/12">{component.name}</div>
                  <span className="text-gray-700 text-sm font-medium">Type : {component.type}</span>
                </div>

                <div>
                  <span className={`relative inline-block px-3 py-1 font-semibold  leading-tight ${
                component.status === "Testing" ? "text-green-500" :
                component.status === "Approved" ? "text-violet-500" :
                component.status === "Process" ? "text-yellow-500" :
                component.status === "Review" ? "text-pink-500" :
                null
              }`}>
                    <span className={`absolute inset-0 bg-green-200 opacity-50 rounded-full ${
                component.status === "Testing" ? "bg-green-200" :
                component.status === "Approved" ? "bg-violet-200" :
                component.status === "Process" ? "bg-yellow-200" :
                component.status === "Review" ? "bg-pink-200" :
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
      {/*  Hardware  */}

    </div>
  )
}

export default Hardware
