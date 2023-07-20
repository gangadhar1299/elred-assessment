import { SearchField } from '@/components'
import { getCategories } from '@/services'
import React from 'react'
import { Category } from './components'

export default async function CategoriesLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const categoriesPromise = getCategories()
  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-2xl'>Print Heads</h1>
        <div className='w-1/2'>
          <SearchField id='categories-search' />
        </div>
      </div>
      <Categories categoriesPromise={categoriesPromise} />
      <hr />
      {children}
    </>
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
