import React from 'react'

function ClearFilter() {
  return (
      <div className="mt-1% px-10% relative">
          <div className='fixed z-30'>
              <a className="text-slate-500 text-md hover:text-blue-500 cursor-pointer">
                  Clear all
              </a>
              <hr className="w-12/12 text-slate-200" />
          </div>
      </div>
  );
}

export default ClearFilter