import React from 'react'

function Container({children}) {
    return (
      <div className='w-full mx-auto px-2 sm:px-2 md:px-4'>
        {children}
      </div>
    )
  }

export default Container