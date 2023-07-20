import React from 'react'

export default function ProductsLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-white rounded p-6 w-3/6 flex flex-col gap-6'>
      {children}
    </div>
  )
}
