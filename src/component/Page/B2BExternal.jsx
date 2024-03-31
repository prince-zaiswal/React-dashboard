import React from 'react';

// data
import {B2bonline, B2breview, B2bpublicData, B2bhealth} from '../data/ExternalData.js';


function B2BExternal() {
  return (
    <div className='p-3 md:p-0'>
    <h2 className='font-medium text-xl text-black mt-5'>External</h2>
    <h3 className='font-medium text-gray-400 text-[14px]'>B2B - External - Research</h3>

    {/*  Online && Interview  */}
    <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 md:items-stretch'>
          <div className='bg-white pb-4  rounded-lg px-4  md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>Online</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Feedback - Detail</h3>
            </div>
            <div className='h-[350px] overflow-y-scroll'>
            <table className=" leading-normal overflow-x-auto h-1/4 w-full text-center">
              <thead className='text-center sticky z-30 top-[0px]'>
                <tr>
                  <th
                    className="py-3 p-1 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase"
                  >
                    Reviewer Name
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Rating
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Review
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody >
                {B2bonline && B2bonline.map((item,index) => <tr>
                  <td className="py-3 p-1 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    {item['Reviewer Name']}
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap"> {item['Rating']}</p>
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item['Review Text']}</p>
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold ${item['Feedback']==="Positive" ? "text-green-900" : "text-red-900"} leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${item['Feedback']==="Positive" ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">{item['Feedback']}</span>
                    </span>
                  </td>
                </tr>)}
              </tbody>
            </table>
            </div>
          </div>
          <div className='bg-white   pb-4 rounded-lg mt-5 md:mt-0 px-4 md:w-1/2'>
            <div className='py-4 '>
              <h2 className='font-medium text-xl text-black'>Interview</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Feedback - Detail</h3>
            </div>
            <div className='h-[350px] overflow-y-scroll'>
            <table className=" leading-normal overflow-x-auto h-1/4 w-full text-center">
              <thead className='text-center sticky z-30 top-[0px]'>
                <tr>
                  <th
                    className="py-3 p-1 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase"
                  >
                    Reviewer Name
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Rating
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Review
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody >
                {B2breview && B2breview.map((item,index) => <tr>
                  <td className="py-3 p-1 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    {item['Reviewer Name']}
                  </td>
                  <td className=" py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap"> {item['Rating']}</p>
                  </td>
                  <td className=" py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item['Review Text']}</p>
                  </td>
                  <td className=" py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold ${item['Feedback']==="Positive" ? "text-green-900" : "text-red-900"} leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${item['Feedback']==="Positive" ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">{item['Feedback']}</span>
                    </span>
                  </td>
                </tr>)}
              </tbody>
            </table>
            </div>
          </div>



        </div>
    {/*  Online && Interview   */}
     {/*  Public data && Health  */}
     <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 mt-5 md:items-stretch'>
          <div className='bg-white pb-4  rounded-lg px-4  md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>Public Data</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Feedback - Detail</h3>
            </div>
            <div className='h-[350px] overflow-y-scroll'>
            <table className=" leading-normal overflow-x-auto h-1/4 w-full text-center">
              <thead className='text-center sticky z-30 top-[0px]'>
                <tr>
                  <th
                    className="py-3 p-1 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase"
                  >
                    Reviewer Name
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Rating
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Review
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody >
                {B2bpublicData && B2bpublicData.map((item,index) => <tr>
                  <td className="py-3 p-1 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    {item['Reviewer Name']}
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap"> {item['Rating']}</p>
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item['Review Text']}</p>
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold ${item['Feedback']==="Positive" ? "text-green-900" : "text-red-900"} leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${item['Feedback']==="Positive" ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">{item['Feedback']}</span>
                    </span>
                  </td>
                </tr>)}
              </tbody>
            </table>
            </div>
          </div>
          <div className='bg-white   pb-4 rounded-lg mt-5 md:mt-0 px-4 md:w-1/2'>
            <div className='py-4 '>
              <h2 className='font-medium text-xl text-black'>Health</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Feedback - Detail</h3>
            </div>
            <div className='h-[350px] overflow-y-scroll'>
            <table className=" leading-normal overflow-x-auto h-1/4 w-full text-center">
              <thead className='text-center sticky z-30 top-[0px]'>
                <tr>
                  <th
                    className="py-3 p-1 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase"
                  >
                    Reviewer Name
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Rating
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Review
                  </th>
                  <th
                    className="py-3 p-1 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody >
                {B2bhealth && B2bhealth.map((item,index) => <tr>
                  <td className="py-3 p-1 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    {item['Reviewer Name']}
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap"> {item['Rating']}</p>
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item['Review Text']}</p>
                  </td>
                  <td className="py-3 p-1 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold ${item['Feedback']==="Positive" ? "text-green-900" : "text-red-900"} leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${item['Feedback']==="Positive" ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">{item['Feedback']}</span>
                    </span>
                  </td>
                </tr>)}
              </tbody>
            </table>
            </div>
          </div>



        </div>
    {/*  Public data && Health  */}

  </div>
  )
}

export default B2BExternal
