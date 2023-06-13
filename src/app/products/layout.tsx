import React from 'react'
import { SearchField } from '@/components'
import { Category } from '@/components/Category'
import { getCategories } from '../services'

export default async function ProductsLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const categories = getCategories()
  return (
    <div className='bg-white rounded p-6 w-3/6 flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-2xl'>Print Heads</h1>
        <div className='w-1/2'>
          <SearchField id='categories-search' />
        </div>
      </div>
      <React.Suspense fallback={<p>Loading categories...</p>}>
        <Categories categoriesPromise={categories} />
      </React.Suspense>
      <hr />
      {children}
    </div>
  )
}

async function Categories ({
  categoriesPromise
}: {
  categoriesPromise: ReturnType<typeof getCategories>
}) {
  const categories = await categoriesPromise
  return (
    <div className='flex gap-4 overflow-x-auto'>
      {categories.result.map(category => (
        <Category category={category} key={category.categoryId} />
      ))}
    </div>
  )
}
