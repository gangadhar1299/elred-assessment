import { getSubCategories } from '@/app/services'
import { TSubCategory } from '@/types'
import Image from 'next/image'

export default async function Page ({
  params: { categoryId }
}: {
  params: { categoryId: string }
}) {
  const { result: subCategories } = await getSubCategories(categoryId)

  if (!subCategories.length) return <p>No sub categories found!</p>

  return (
    <div className='flex flex-wrap gap-2'>
      {subCategories.map(subCategory => (
        <SubCategory
          key={subCategory.subCategoryId}
          subCategory={subCategory}
        />
      ))}
    </div>
  )
}

function SubCategory ({ subCategory }: { subCategory: TSubCategory }) {
  return (
    <div className='relative'>
      <Image
        src={subCategory.subCategoryImageURL}
        alt={subCategory.subCategoryName}
        width={160}
        height={160}
        className='h-40 w-40'
      />
      <span className='absolute bottom-2 w-full text-center text-xs font-semibold'>
        {subCategory.subCategoryName}
      </span>
    </div>
  )
}

