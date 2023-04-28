import React from 'react'

function ClearFilter() {
  return (
    <div className='flex flex-col mt-[1%] px-[10%]'>
        <a className='text-slate-500 text-md hover:text-blue-500'>Clear all</a>
        <hr className='w-12/12 border-hrLineHeight' />
    </div>
  )
}

export default ClearFilter