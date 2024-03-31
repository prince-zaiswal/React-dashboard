import React from 'react'

// prd Data 
import { prd } from '../data/PlanningData.js';

// ChartsJs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar, Doughnut, Pie } from 'react-chartjs-2';


function Prd() {

// Lifestyle Data
  const Lifestyle = {
    labels: prd.Lifestyle.map(item => item.Category),
    datasets: [{
      data: prd.Lifestyle.map(item => item.Percentage),
      borderRadius: [3],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56'
      ]
    }]}
// location Data
    const location = {
      labels: prd.Location.map(item => item.Category),
      datasets: [{
        data: prd.Location.map(item => item.Percentage),
        backgroundColor: [
          '#4BC0C0', '#FF6384', '#9966FF'
        ]
      }]
    }
// age data
      const age = {
        labels: prd.Age.map(item => item.Range),
        datasets: [{
          data: prd.Age.map(item => item.Percentage),
          backgroundColor: [
            '#FFCE56', '#36A2EB', '#FF6384'
          ]
        }]}
// income data
        const income = {
          labels: prd.Income.map(item => item.Category),
          datasets: [{
            data: prd.Income.map(item => item.Percentage),
            backgroundColor: [
              '#9966FF', '#4BC0C0', '#FF9F40'
            ]
          }]}

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
        text: 'B2B vs B2C Feedback',
        position: 'bottom'
      }
    }
    , scales: {
      y: {
        grid: {
          display: true // Remove grid lines on the y-axis
        }
      },
      x: {
        grid: {
          display: true // Remove grid lines on the x-axis
        }
      }
    },
  };
  return (
    <div className='p-3 md:p-0'>
      <h2 className='font-medium text-xl text-black mt-5'>Prd</h2>
      <h3 className='font-medium text-gray-400 text-[14px]'>Planning - Product Requirement Document</h3>

      {/*  Lifestyle && age  */}
      <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 md:items-center'>
        <div className='bg-white  rounded-lg px-4 md:w-1/2'>
          <div className='py-4'>
            <h2 className='font-medium text-xl text-black'>Lifestyle</h2>
            <h3 className='font-medium text-gray-400 text-[12px]'>Lifestyle-wise - Overview</h3>
          </div>
          <div className='w-full pb-3 '>
            <Doughnut data={ Lifestyle} />
          </div>
        </div>

        <div className='bg-white rounded-lg mt-4 md:mt-0 px-4 md:w-1/2'>
          <div className='py-4'>
            <h2 className='font-medium text-xl text-black'>Age</h2>
            <h3 className='font-medium text-gray-400 text-[12px]'>Age-wise - Overview</h3>
          </div>
          <div className='w-full pb-3'>
          <Doughnut data={ age} />  
          </div>
        </div>

      </div>
      {/*  Lifestyle && age  */}


       {/*  Income && location  */}
       <div className='flex md:space-x-4 flex-col mt-5 md:flex-row md:space-y-0 md:items-center'>
        <div className='bg-white  rounded-lg px-4 md:w-1/2'>
          <div className='py-4'>
            <h2 className='font-medium text-xl text-black'>Location</h2>
            <h3 className='font-medium text-gray-400 text-[12px]'>Location-wise - Overview</h3>
          </div>
          <div className='w-full pb-3 '>
            <Doughnut data={ location} />
          </div>
        </div>

        <div className='bg-white rounded-lg mt-4 md:mt-0 px-4 md:w-1/2'>
          <div className='py-4'>
            <h2 className='font-medium text-xl text-black'>Income</h2>
            <h3 className='font-medium text-gray-400 text-[12px]'>Income-wise - Overview</h3>
          </div>
          <div className='w-full pb-3'>
          <Doughnut data={ income} />  
          </div>
        </div>

      </div>
      {/*  Reaserch  */}

    </div>
  )
}

export default Prd
