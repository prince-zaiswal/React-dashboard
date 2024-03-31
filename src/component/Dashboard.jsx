import React from 'react';

// Icons
import { RiAccountPinBoxLine } from '@remixicon/react';

// ChartsJs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';


function Dashboard() {

  // last latest 6 month Name
  const labels = [];
  const currentDate = new Date();
  for (let i = 5; i >= 0; i--) {
    const month = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1)
      .toLocaleString('default', { month: 'long' });
    labels.push(month);
  }

  // Online sales and martketing Data 
  const onliedata = {
    labels: labels,
    datasets: [{
      label: 'Sales',
      data: [200000, 300000, 400000, 500000, 600000, 700000, 700000],
      borderRadius: [5],
      backgroundColor: [
        '#22C55E',
      ],
    }
      , {
      label: 'Marketing',
      data: [100000, 400000, 300000, 300000, 500000, 200000, 400000],
      borderRadius: [5],
      backgroundColor: [
        '#F43F5E'
      ],
    }]
  };

  // Dealership sales and martketing Data 
  const dealershipdata = {
    labels: labels,
    datasets: [{
      label: 'Sales',
      data: [200000, 300000, 400000, 500000, 600000, 700000, 700000],
      borderRadius: [5],
      backgroundColor: [
        '#50cd89',
      ],
    }
      , {
      label: 'Marketing',
      data: [100000, 400000, 300000, 300000, 500000, 200000, 400000],
      borderRadius: [8, 8, 8, 8, 8, 8, 8],
      backgroundColor: [
        '#f1416c'
      ],
    }]
  };

  // Charts Options settings
  const options = {
    elements: {
      bar: {
        borderWidth: 1,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        titleFont: {
          size: 14, // Set the tooltip title font size
        },
        bodyFont: {
          size: 14, // Set the tooltip body font size
        },
      },
      title: {
        display: true,
        text: 'Sales / Marketing Data',
        position: 'bottom'
      }
    }
    , scales: {
      y: {
        grid: {
          display: false // Remove grid lines on the y-axis
        }
      },
      x: {
        grid: {
          display: false // Remove grid lines on the x-axis
        }
      }
    },
  };


  return (
    <div className='p-3 md:p-0'>
      <h2 className='font-medium text-xl text-black mt-5'>Research</h2>
      {/* <h3 className='font-medium text-gray-400 text-[14px]'>Home - Dashboard</h3> */}

      {/*  Reaserch  */}
      <div className="bg-white rounded-lg py-4 my-1">
        <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0'>
          <div className=' px-4 md:w-1/2'>
            <div className='pb-3'>
              <h2 className='font-medium text-xl text-black'>B2B</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Total Internal - Feedback</h3>
            </div>
            <div className='grid grid-cols-2 gap-8  '>
              <div className='research-box bg-blue-600 shadow-lg'>
                <div className='text-6xl text-white'>50</div>
                <p className='text-white font-medium'>Online</p>
              </div>

              <div className='research-box bg-blue-600 '>
                <div className='text-6xl text-white'>20</div>
                <p className='text-white font-medium'>Interview</p>
              </div>

              <div className='research-box bg-blue-600 shadow-lg '>
                <div className='text-6xl text-white'>50</div>
                <p className='text-white font-medium'>Public Data</p>
              </div>

              <div className='research-box bg-blue-600 shadow-lg '>
                <div className='text-6xl text-white'>20</div>
                <p className='text-white font-medium'>Health</p>
              </div>
            </div>
          </div>

          <div className='md:w-1/2 px-4 border-gray-200 '>
            <div className='py-3 mt-3 md:pt-0 md:mt-0'>
              <h2 className='font-medium text-xl text-black'>B2C</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Total Internal - Feedback</h3>
            </div>
            <div className='grid grid-cols-2 gap-8'>
              <div className='research-box bg-[#f1416c] shadow-lg'>
                <div className='text-6xl text-white'>50</div>
                <p className='text-white font-medium'>Online</p>
              </div>

              <div className='research-box bg-[#f1416c] '>
                <div className='text-6xl text-white'>20</div>
                <p className='text-white font-medium'>Interview</p>
              </div>

              <div className='research-box bg-[#f1416c] shadow-lg '>
                <div className='text-6xl text-white'>50</div>
                <p className='text-white font-medium'>Public Data</p>
              </div>

              <div className='research-box bg-[#f1416c] shadow-lg '>
                <div className='text-6xl text-white'>20</div>
                <p className='text-white font-medium'>Health</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/*  Reaserch  */}


      {/*  Planning  */}
      <h2 className='font-medium text-xl text-black mt-6 mb-2'>Planning</h2>
      <div className="my-2">

        <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 md:items-stretch'>
          <div className='bg-white pb-4  rounded-lg px-4  md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>PRD</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Product Requirement - Document</h3>
            </div>
            <table className=" leading-normal overflow-x-auto h-1/4 w-full text-center">
              <thead className='text-center'>
                <tr>
                  <th
                    className="py-3 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase"
                  >
                    Factor
                  </th>
                  <th
                    className="py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Leader
                  </th>
                  <th
                    className="py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Share
                  </th>
                  <th
                    className="py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                  Age
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">(25-45)</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">60</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Low</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                  Income 
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Above 1.5M</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">40</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-yellow-700 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Medium</span>
                    </span>
                  </td>
                </tr><tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                  Location 
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Urban</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">40</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-700 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Very High</span>
                    </span>
                  </td>
                </tr><tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                  Lifestyle 
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Active,Regular</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">30</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Very High</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-white   pb-4 rounded-lg mt-5 md:mt-0 px-4 md:w-1/2'>
            <div className='py-4 '>
              <h2 className='font-medium text-xl text-black'>Specs</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Product Specifications</h3>
            </div>
            <table className=" leading-normal overflow-x-auto h-1/4 w-full text-center">
              <thead className='text-center'>
                <tr>
                  <th
                    className="py-3 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase"
                  >
                    Feature
                  </th>
                  <th
                    className="py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase "
                  >
                    Detail
                  </th>
                  <th
                    className="py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    Engine Displacement
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">1497 cc</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gray-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">--</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    Max Power
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">3750rpm</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-blue-400 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Approved</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    Seating Capacity
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">7</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Testing</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 border-b cursor-pointer text-blue-700 border-gray-200 bg-white text-sm">
                    Boot Space
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">382 Liters</p>
                  </td>
                  <td className=" py-3 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-yellow-700 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Process</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



        </div>
      </div>
      {/*  Planning  */}

      {/*  Designing  */}
      <h2 className='font-medium text-xl text-black mt-6 mb-2'>Designing</h2>
      <div className="bg-white  rounded-lg py-4 my-1">

        <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 md:items-center'>
          <div className='px-4 md:w-1/2'>
            <div className='pb-3'>
              <h2 className='font-medium text-xl text-black'>Software</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Design- Software Status</h3>
            </div>

            <div className="flex items-center bg-yellow-100 rounded-md p-2 mb-5">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg width={40} height={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
              <div className="flex-grow  me-2">
                <a href="#" className="font-bold text-gray-800 hover:text-gray-500 fs-6">Music System</a>
                <span className="fw-normal block">To be complete</span>
              </div>
              <span className="font-bold text-green-500 py-1">+90%</span>
            </div>

            <div className="flex items-center bg-green-100 rounded-md p-2 mb-5">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg width={40} height={40} fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M833.935 1063.327c28.913 170.315 64.038 348.198 83.464 384.79 27.557 51.84 92.047 71.944 144 44.387 51.84-27.558 71.717-92.273 44.16-144.113-19.426-36.593-146.937-165.46-271.624-285.064Zm-43.821-196.405c61.553 56.923 370.899 344.81 415.285 428.612 56.696 106.842 15.811 239.887-91.144 296.697-32.64 17.28-67.765 25.411-102.325 25.411-78.72 0-154.955-42.353-194.371-116.555-44.386-83.802-109.102-501.346-121.638-584.245-3.501-23.717 8.245-47.21 29.365-58.277 21.346-11.294 47.096-8.02 64.828 8.357ZM960.045 281.99c529.355 0 960 430.757 960 960 0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144h-524.386v-112.942h434.258c9.487-50.71 14.231-103.115 14.231-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.977l-10.39-43.144C8.966 1395.137.044 1319.128.044 1241.99c0-529.243 430.645-960 960-960Zm542.547 390.686 79.85 79.85-112.716 112.715-79.85-79.85 112.716-112.715Zm-1085.184 0L530.123 785.39l-79.85 79.85L337.56 752.524l79.849-79.85Zm599.063-201.363v159.473H903.529V471.312h112.942Z" fillRule="evenodd"></path> </g></svg>
              </span>
              <div className="flex-grow  me-2">
                <a href="#" className="font-bold text-gray-800 hover:text-gray-500 fs-6">Navigation System</a>
                <span className="fw-normal block">Due in 17 Days</span>
              </div>
              <span className="font-bold text-red-500 py-1">+28%</span>
            </div>

            <div className="flex items-center bg-red-100 rounded-md p-2 mb-5">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg width={40} height={40} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,15.63c-50.108,0-90.874,40.766-90.874,90.874c0,50.108,40.766,90.874,90.874,90.874s90.874-40.766,90.874-90.874 C346.874,56.396,306.108,15.63,256,15.63z M293.865,120.758l-23.611,23.611L256,130.114l-14.254,14.254l-23.611-23.611 l14.254-14.254l-14.254-14.253l23.611-23.611L256,82.893l14.254-14.254l23.611,23.611l-14.254,14.254L293.865,120.758z"></path> </g> </g> <g> <g> <rect y="207.493" width="33.391" height="36.374"></rect> </g> </g> <g> <g> <rect y="99.995" width="33.391" height="36.374"></rect> </g> </g> <g> <g> <rect x="50.087" y="153.744" width="33.391" height="36.374"></rect> </g> </g> <g> <g> <path d="M390.827,399.048c-26.831,0-48.661,21.829-48.661,48.661s21.829,48.661,48.661,48.661 c26.832,0,48.661-21.829,48.661-48.661S417.658,399.048,390.827,399.048z"></path> </g> </g> <g> <g> <path d="M139.13,399.048c-26.831,0-48.661,21.829-48.661,48.661s21.829,48.661,48.661,48.661s48.661-21.829,48.661-48.661 S165.961,399.048,139.13,399.048z"></path> </g> </g> <g> <g> <path d="M456.42,325.075l-48.475-97.899h-232.53l-41.703,84.222l-65.237-78.22L42.83,254.565l59.688,71.568H0v138.272h58.79 c-1.12-5.393-1.712-10.976-1.712-16.696c0-45.244,36.808-82.052,82.052-82.052c45.244,0,82.052,36.808,82.052,82.052 c0,5.72-0.592,11.303-1.712,16.696h91.016c-1.12-5.393-1.712-10.976-1.712-16.696c0-45.244,36.808-82.052,82.052-82.052 s82.052,36.808,82.052,82.052c0,5.72-0.592,11.303-1.712,16.696H512v-139.33H456.42z M274.984,325.075H164.198l31.942-64.508 h78.844V325.075z M308.375,325.075v-64.508h78.844l31.941,64.508H308.375z"></path> </g> </g> </g></svg>
              </span>
              <div className="flex-grow  me-2">
                <span href="#" className="font-bold cursor-pointer text-gray-800 hover:text-gray-500 fs-6">Advanced Break System</span>
                <span className="fw-normal block">Due in 10 Days</span>
              </div>
              <span className="font-bold text-yellow-500 py-1">+72%</span>
            </div>

            <div className="flex items-center bg-pink-100 rounded-md p-2">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg height={40} width={40} viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M908.008473 139.713707L529.299213 3.059374a51.005609 51.005609 0 0 0-17.397182-3.059374c-5.950311 0-11.855934 1.03125-17.534682 3.090312L117.015902 139.744645c-20.394681 7.397498-34.704989 26.774679-34.70499 48.472173v323.781463c0 72.287165 23.299368 144.584643 67.763417 214.87806 34.082802 53.875921 81.520288 106.71028 140.256832 157.045577 98.209345 84.156849 195.655565 132.70121 199.749627 134.725896a51.957797 51.957797 0 0 0 22.96593 5.352186c7.717185 0 15.485933-1.732499 22.608431-5.197498 4.094061-1.993749 101.495594-49.78186 199.797752-133.605272 58.794982-50.132485 105.520905-102.966844 139.627769-157.031827 44.446861-70.444666 66.601542-143.171831 66.601543-216.167122V188.216818c0.003437-21.731868-13.230933-41.133112-33.67374-48.503111zM164.810887 511.757656V226.768368c0-10.848747 6.648123-20.539056 16.847183-24.237805l320.759902-116.692777c2.859999-1.034687 6.142811-1.797812 9.580309-1.797812v427.961745h349.631456c0.020625 0 0.044687 0.464062 0.044688 0.759687-0.06875 93.255909-47.038736 185.679943-139.58652 275.670228-72.273415 70.279666-154.384953 120.436213-196.621503 144.096519-3.915311 2.196562-10.027184 3.231249-13.464683 3.231249V511.867656l-347.190832-0.11z"></path></g></svg>              </span>
              <div className="flex-grow  me-2">
                <a href="#" className="font-bold text-gray-800 hover:text-gray-500 fs-6">Vehicle Safety Software</a>
                <span className="fw-normal block">Due in 15 Days</span>
              </div>
              <span className="font-bold text-red-500 py-1">+18%</span>
            </div>

          </div>

          <div className='md:w-1/2 px-4'>
            <div className='py-3 mt-3 md:pt-0 md:mt-0'>
              <h2 className='font-medium text-xl text-black'>Hardware</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Design- Hardware Status</h3>
            </div>


            <div className="flex items-center bg-yellow-100 rounded-md p-2 mb-5">
              <span className="svg-icon text-yellow-100 me-4">
                <svg height={40} width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20" stroke="#000000" strokeWidth="0.8399999999999999" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
              <div className="flex-grow  me-2">
                <a href="#" className="font-bold text-gray-800 hover:text-gray-500 fs-6">Chassis</a>
                <span className="fw-normal block">Complete</span>
              </div>
              <span className="font-bold text-green-500 py-1">100%</span>
            </div>

            <div className="flex items-center bg-green-100 rounded-md p-2 mb-5">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg height={30} width={30} viewBox="-6.79 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="suspension" transform="translate(-8.787 -2)"> <rect id="secondary" fill="#2ca9bc" width="2" height="2" transform="translate(11 3)"></rect> <path id="primary" d="M12,21a2,2,0,1,1,2-2A2,2,0,0,1,12,21Zm0-4V5m1-2H11V5h2Zm-3,8.5,4-1m-4,4,4-1m-4-5,4-1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g></svg>
              </span>
              <div className="flex-grow  me-2">
                <a href="#" className="font-bold text-gray-800 hover:text-gray-500 fs-6">Suspension</a>
                <span className="fw-normal block">Due in 76 Days</span>
              </div>
              <span className="font-bold text-red-500 py-1">+37%</span>
            </div>

            <div className="flex items-center bg-red-100 rounded-md p-2 mb-5">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg width={30} height={30} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" fillRule="evenodd" d="M2.25 1A2.25 2.25 0 000 3.25v9.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-9.5A2.25 2.25 0 0013.75 1H2.25zM4.5 2.5H2.25a.75.75 0 00-.75.75V5h3V2.5zm-3 4v3H7v-3H1.5zm0 4.5v1.75c0 .414.336.75.75.75H4.5V11h-3zM6 13.5h4V11H6v2.5zm5.5 0h2.25a.75.75 0 00.75-.75V11h-3v2.5zm3-4v-3h-6v3h6zm0-4.5V3.25a.75.75 0 00-.75-.75H11.5V5h3zM10 2.5V5H6V2.5h4z" clipRule="evenodd"></path></g></svg>
              </span>
              <div className="flex-grow  me-2">
                <span href="#" className="font-bold cursor-pointer text-gray-800 hover:text-gray-500 fs-6">Interior Component</span>
                <span className="fw-normal block">Due in 43 Days</span>
              </div>
              <span className="font-bold text-yellow-500 py-1">+72%</span>
            </div>

            <div className="flex items-center bg-pink-100 rounded-md p-2">
              <span className="svg-icon text-yellow-100 svg-icon-1 me-4">
                <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M196.265,238.936c-9.412,0-17.067,7.654-17.067,17.067c0,9.412,7.654,17.067,17.067,17.067s17.067-7.654,17.067-17.067 C213.332,246.59,205.677,238.936,196.265,238.936z"></path> <path d="M130.938,282.674c-24.875-2.645-50.057-0.23-74.931,7.253l-1.843,0.546c5.146,30.131,17.067,58.854,34.807,83.84 l1.63-0.879c0,0,0.009,0,0.009-0.009c22.81-12.211,42.317-28.297,58.069-47.855C140.231,312.524,134.181,297.906,130.938,282.674 z"></path> <path d="M138.573,90.611c12.22,22.81,28.297,42.317,47.855,58.086c13.056-8.465,27.682-14.515,42.897-17.749 c2.654-24.883,0.222-50.065-7.253-74.94l-0.546-1.843c-30.131,5.146-58.854,17.067-83.84,34.816l0.879,1.621 C138.564,90.603,138.564,90.611,138.573,90.611z"></path> <path d="M56.015,222.086c24.789,7.492,49.954,9.907,74.923,7.228c3.251-15.232,9.31-29.858,17.758-42.897 c-15.701-19.465-35.234-35.541-58.095-47.846l-1.63-0.879c-17.741,24.986-29.662,53.709-34.807,83.84l1.835,0.546L56.015,222.086 z"></path> <path d="M315.732,238.936c-9.412,0-17.067,7.654-17.067,17.067c0,9.412,7.654,17.067,17.067,17.067s17.067-7.654,17.067-17.067 C332.798,246.59,325.144,238.936,315.732,238.936z"></path> <path d="M381.157,229.228c25.66,2.842,50.765,0.461,74.718-7.108l1.954-0.589c-5.137-30.131-17.067-58.854-34.807-83.84 l-1.621,0.879c-0.043,0.017-0.085,0.043-0.128,0.068c-22.255,11.511-41.711,27.605-57.899,47.889 C371.83,199.574,377.897,214.132,381.157,229.228z"></path> <path d="M255.998,213.336c9.412,0,17.067-7.654,17.067-17.067c0-9.412-7.654-17.067-17.067-17.067 c-9.412,0-17.067,7.654-17.067,17.067C238.932,205.682,246.586,213.336,255.998,213.336z"></path> <path d="M325.49,148.636c20.181-16.137,36.284-35.593,47.881-57.924l0.939-1.732c-24.986-17.741-53.709-29.67-83.84-34.807 l-0.546,1.835c-7.501,24.789-9.924,49.963-7.236,74.94C297.884,134.189,312.476,140.222,325.49,148.636z"></path> <path d="M373.365,421.278c-11.52-22.263-27.605-41.719-47.889-57.907c-12.996,8.405-27.546,14.43-42.701,17.673 c-2.867,25.694-0.486,50.842,7.108,74.837l0.589,1.954c30.123-5.137,58.854-17.067,83.831-34.807l-0.87-1.621 C373.416,421.363,373.391,421.321,373.365,421.278z"></path> <path d="M455.857,289.886c-23.834-7.603-48.947-9.975-74.701-7.091c-3.26,15.078-9.327,29.636-17.792,42.701 c16.136,20.181,35.601,36.284,57.924,47.881l1.732,0.939c17.741-24.986,29.67-53.709,34.807-83.84l-1.826-0.546 C455.959,289.911,455.908,289.894,455.857,289.886z"></path> <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M421.453,119.151 c3.695-1.98,8.286-0.99,10.82,2.338c23.407,30.592,38.468,66.893,43.563,104.951c0.563,4.164-1.988,8.115-6.007,9.31 l-8.934,2.679c-19.004,6.007-38.724,9.028-58.854,9.028c-9.685,0-19.465-0.7-29.312-2.099c-3.695-0.521-6.622-3.396-7.219-7.083 c-2.739-16.819-9.506-33.101-19.601-47.053c-2.185-3.038-2.15-7.125,0.085-10.121c18.432-24.619,41.105-43.989,67.379-57.6 L421.453,119.151z M349.867,256c0,18.825-15.309,34.133-34.133,34.133S281.6,274.825,281.6,256s15.309-34.133,34.133-34.133 S349.867,237.175,349.867,256z M273.579,51.089l2.671-8.917c1.195-4.019,5.094-6.562,9.31-6.008 c38.067,5.094,74.359,20.156,104.951,43.563c3.337,2.543,4.318,7.134,2.338,10.82l-4.386,8.141 c-13.645,26.257-33.024,48.947-57.549,67.319c-1.519,1.143-3.319,1.715-5.12,1.715c-1.749,0-3.499-0.546-4.992-1.621 c-13.884-10.035-30.199-16.777-47.164-19.49c-3.695-0.589-6.571-3.524-7.1-7.236C262.391,109.952,264.764,80.248,273.579,51.089z M290.133,196.267c0,18.825-15.309,34.133-34.133,34.133s-34.133-15.309-34.133-34.133s15.309-34.133,34.133-34.133 S290.133,177.442,290.133,196.267z M230.4,256c0,18.825-15.309,34.133-34.133,34.133S162.133,274.825,162.133,256 s15.309-34.133,34.133-34.133S230.4,237.175,230.4,256z M121.481,79.727c30.592-23.407,66.893-38.468,104.96-43.563 c4.198-0.521,8.107,1.988,9.31,6.008l2.671,8.934c8.789,29.261,11.17,58.965,7.049,88.26c-0.512,3.721-3.396,6.656-7.1,7.245 c-16.99,2.714-33.34,9.481-47.266,19.558c-1.493,1.075-3.251,1.613-5.001,1.613c-1.809,0-3.61-0.572-5.129-1.715 c-23.731-17.869-43.059-40.55-57.455-67.388l-4.369-8.132C117.163,86.861,118.144,82.27,121.481,79.727z M36.156,226.441 c5.103-38.059,20.156-74.359,43.571-104.951c2.526-3.319,7.125-4.301,10.812-2.338l8.141,4.386 c26.923,14.481,49.596,33.801,67.405,57.412c2.244,3.004,2.287,7.117,0.085,10.155c-10.061,13.901-16.828,30.242-19.567,47.258 c-0.589,3.703-3.524,6.571-7.228,7.1c-9.387,1.323-18.79,1.98-28.203,1.98c-20.104,0-40.226-3.012-60.092-9.02l-8.917-2.671 C38.144,234.556,35.601,230.605,36.156,226.441z M90.539,392.849c-1.271,0.691-2.662,1.024-4.036,1.024 c-2.586,0-5.12-1.178-6.775-3.354c-23.415-30.592-38.468-66.893-43.571-104.96c-0.555-4.156,1.988-8.107,6.008-9.31l8.934-2.671 c29.269-8.798,58.965-11.179,88.269-7.049c3.712,0.512,6.647,3.396,7.236,7.1c2.731,17.007,9.489,33.348,19.55,47.266 c2.202,3.029,2.159,7.142-0.085,10.129c-17.877,23.74-40.55,43.059-67.396,57.455L90.539,392.849z M238.396,460.971l-2.645,8.866 c-1.092,3.652-4.454,6.084-8.166,6.084c-0.375,0-0.759-0.026-1.143-0.077c-38.067-5.103-74.368-20.156-104.96-43.563 c-3.337-2.543-4.318-7.134-2.33-10.82l4.378-8.141c14.49-26.914,33.801-49.596,57.421-67.405 c3.012-2.244,7.108-2.287,10.146-0.085c14.071,10.189,29.926,16.768,47.147,19.55c3.686,0.597,6.554,3.516,7.091,7.211 C249.694,403.072,247.364,432.802,238.396,460.971z M221.867,315.733c0-18.825,15.309-34.133,34.133-34.133 s34.133,15.309,34.133,34.133S274.825,349.867,256,349.867S221.867,334.558,221.867,315.733z M390.511,432.282 c-30.592,23.407-66.884,38.46-104.951,43.563c-0.384,0.051-0.768,0.077-1.143,0.077c-3.721,0-7.074-2.432-8.166-6.084 l-2.679-8.934c-8.926-28.211-11.264-57.958-6.921-88.311c0.529-3.695,3.405-6.622,7.091-7.211 c16.913-2.731,33.195-9.464,47.044-19.473c3.029-2.167,7.134-2.142,10.112,0.085c24.619,18.432,43.989,41.114,57.6,67.388 l4.352,8.081C394.829,425.148,393.847,429.739,390.511,432.282z M475.836,285.56c-5.094,38.067-20.156,74.368-43.563,104.96 c-1.655,2.176-4.19,3.354-6.784,3.354c-1.365,0-2.756-0.333-4.036-1.024l-8.141-4.378 c-26.257-13.653-48.947-33.024-67.319-57.549c-2.244-2.987-2.287-7.083-0.094-10.112c10.103-13.995,16.87-30.268,19.601-47.07 c0.597-3.678,3.524-6.545,7.219-7.083c30.438-4.343,60.109-1.997,88.243,6.938l8.866,2.654 C473.847,277.453,476.399,281.404,475.836,285.56z"></path> <path d="M255.998,298.669c-9.412,0-17.067,7.654-17.067,17.067c0,9.412,7.654,17.067,17.067,17.067 c9.412,0,17.067-7.654,17.067-17.067C273.065,306.324,265.411,298.669,255.998,298.669z"></path> <path d="M186.415,363.302c-19.465,15.71-35.541,35.234-47.846,58.103l-0.879,1.621c24.986,17.741,53.709,29.67,83.831,34.807 l0.555-1.835c0.017-0.043,0.034-0.085,0.043-0.137c7.603-23.859,9.984-49.007,7.091-74.829 C214.003,377.783,199.42,371.733,186.415,363.302z"></path> </g> </g> </g> </g></svg>
              </span>
              <div className="flex-grow  me-2">
                <a href="#" className="font-bold text-gray-800 hover:text-gray-500 fs-6">Wheels and Tires</a>
                <span className="fw-normal block">Due in 20 Days</span>
              </div>
              <span className="font-bold text-red-500 py-1">+68%</span>
            </div>
          </div>

        </div>
      </div>
      {/*  Designing  */}

      {/*  Sales/Marketing  */}
      <h2 className='font-medium text-xl text-black mt-6 mb-2'>Sales/Marketing</h2>
      <div className="rounded-lg">

        <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 md:items-center'>
          <div className='bg-white rounded-lg px-4 md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>Online</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Total Online - Sales/Marketing</h3>
            </div>
            <div className='w-full'>
              <Bar data={onliedata} options={options} />
            </div>
          </div>

          <div className='bg-white rounded-lg mt-4 md:mt-0 px-4 md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>Dealership</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Total Dealership - Sales/Marketing</h3>
            </div>
            <div className='w-full'>
              <Bar data={dealershipdata} options={options} />
            </div>
          </div>

        </div>
      </div>
      {/*  Sales/Marketing  */}

    </div>
  )
}

export default Dashboard
