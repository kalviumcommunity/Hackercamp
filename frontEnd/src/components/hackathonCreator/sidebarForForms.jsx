import React from 'react'
import {Link} from 'react-router-dom'
function SidebarForForms() {
  return (
      <div>
          <nav className="h-screen w-2/6 bg-primary font-roboto fixed z-50 top-0 left-0">
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
          </nav>
      </div>
  );
}

export default SidebarForForms