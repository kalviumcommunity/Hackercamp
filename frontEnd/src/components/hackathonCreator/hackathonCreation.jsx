import React from 'react'
import {Link} from 'react-router-dom'
function HackathonCreation() {
  const fields = [
      { label: 'Hackathon Name', type: 'text'},
      { label: 'Hackathon Theme', type: 'text' , placeholder:'Eg., Blockchain' },
      { label: 'Hackathon Timings', type: 'text' , placeholder:'Eg., 9pm' },
      { label: 'Hackathon Mode', type: 'text' , placeholder:'Eg., online or offline' },
      { label: 'Hackathon Address', type: 'text' , placeholder:'Eg., online or chennai' },
      { label: 'Organisation Name', type: 'text' , placeholder:'Eg., HCL' },
  ];


  const createFields = () => {
     return fields.map((field, index) => (
         <div key={index} className="font-roboto flex flex-col w-11/12 mb-4">
             <label htmlFor={field.label} className="font-semibold text-base mb-2">
                 {field.label}
             </label>
             <input  
                 type={field.type}
                 placeholder={field.placeholder}
                 className="h-12 border border-whitegray pl-6 rounded placeholder:text-sm bg-graywhite  focus: outline-blue-300"
             />
         </div>
     ));
  }
  return (
      <div>
          <div className="h-screen w-2/6 bg-primary fixed z-50 top-0 left-0">
              <Link to={'/'}>
                  <div className="flex gap-1 text-3xl mt-10 ml-10">
                      <div className="bg-blue-600 text-white w-10 h-8  grid justify-center items-center rounded drop-shadow-lg">
                          <span className="text-xl font-bold">{'H'}</span>
                      </div>
                      <p className="text-white font-bold">HackerCamp</p>
                  </div>
              </Link>
              <div className="absolute top-72 ml-10">
                  <p className="text-white text-2xl mb-4">
                      Empower your ideas. Transform tommorrow.
                  </p>
                  <p className="text-white">
                      Unleash your creativity. Empower your ideas. Collaborate
                      to transform tommorrow at our hackathon. Join us now!
                  </p>
              </div>
          </div>
          <div className="h-screen w-4/6 ml-100 mt-1 flex flex-col items-center font-roboto">
              <div className="h-2 w-37 bg-primary">&nbsp;</div>
              <div className="w-37 border-slate-200 border-2">
                  <div className="py-3">
                      <h1 className="text-center text-3xl font-semibold">
                          Register your hackathon
                      </h1>
                  </div>
                  <div className="flex flex-col items-center ">
                      {createFields()}
                      <div className="flex justify-between w-11/12 mb-4">
                          <div>
                              <label
                                  htmlFor=""
                                  className="font-semibold text-base mb-2"
                              >
                                  Hackathon Entry
                              </label>
                              <div className="flex gap-2">
                                  <input type="checkbox" />
                                  <label htmlFor="">Free</label>
                              </div>
                              <div className="flex gap-2">
                                  <input type="checkbox" />
                                  <label htmlFor="">Paid</label>
                              </div>
                          </div>
                          <div className="flex flex-col pr-16 relative">
                              <label
                                  htmlFor=""
                                  className="font-semibold text-base mb-2"
                              >
                                  Hackathon Poster
                              </label>
                              <input
                                  type="file"
                                  name=""
                                  id=""
                                  className="bg-blue-200 w-72 px-2 py-1 rounded border-2 border-whitegray"
                              />
                          </div>
                      </div>
                      <div className="font-roboto flex flex-col w-11/12 mb-4">
                          <label
                              htmlFor=""
                              className="font-semibold text-base mb-2"
                          >
                              Hackathon date
                          </label>
                          <input
                              type="date"
                              name=""
                              id=""
                              className="h-12 border border-whitegray pl-6 rounded placeholder:text-sm  focus: outline-blue-300"
                          />
                      </div>
                      <div className="font-roboto flex flex-col w-11/12 mb-4">
                          <label
                              htmlFor=""
                              className="font-semibold text-base mb-2"
                          >
                              Hackathon Description
                          </label>
                          <textarea
                              name=""
                              id=""
                              placeholder="Be clear and descriptive"
                              className="bg-graywhite  w-12/12 border-whitegray border focus: outline-blue pl-4"
                          ></textarea>
                      </div>
                      <div className="font-roboto flex flex-col w-11/12 mb-4">
                          <label
                              htmlFor=""
                              className="font-semibold text-base mb-2"
                          >
                              Hackathon Details
                          </label>
                          <textarea
                              name=""
                              id=""
                              placeholder="use this space to provide additional details"
                              className="bg-graywhite  w-12/12 border-whitegray border focus: outline-blue pl-4 "
                          ></textarea>
                      </div>
                  </div>
                  <div>
                      <button  className="bg-seablue m-auto block h-10 w-56 rounded text-white my-4    hover:bg-blue-600">
                          Register Hackathon
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default HackathonCreation