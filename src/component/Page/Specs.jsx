import React from 'react'
const carData = {
  "Model": "FutureCraft X",
  "Engine Type": "Electric",
  "Engine Displacement": "N/A", // Not applicable for electric engines
  "Horsepower": "480 HP",
  "Transmission": "Single-Speed Automatic",
  "Fuel Economy": {
    "City MPG (Electric Equivalent)": "120 MPGe",
    "Highway MPG (Electric Equivalent)": "105 MPGe"
  },
  "Features": [
    "Advanced Autopilot System",
    "Solar Roof Panels (optional)",
    "Holographic Heads-Up Display",
    "Biometric Authentication"
  ]
};

function Specs() {
  return (
    <div className='p-3 md:p-0'>
    <h2 className='font-medium text-xl text-black mt-5'>Specs</h2>
    <h3 className='font-medium text-gray-400 text-[14px]'>Planning - Specs</h3>

    {/*  Specs  */}
    <div className="bg-white rounded-lg py-4 my-1">
    <h1 className="text-3xl font-bold mb-8 text-center">Car Specification</h1>
    <div className=" mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(carData).map(([key, value]) => (
          <div key={key} className="border border-gray-200 rounded px-4 py-3 lg:flex justify-between">
            <div className="text-gray-700 font-medium">{key}:</div>
            {typeof value === 'object' ? (
              <div>
                {Object.entries(value).map(([subKey, subValue]) => (
                  <div key={subKey}>
                    <span className="font-medium">{isNaN(Number(subKey)) ? subKey :  Number(subKey)+1}: </span>{subValue}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-900">{value}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    {/*  Specs  */}

  </div>
  )
}

export default Specs
