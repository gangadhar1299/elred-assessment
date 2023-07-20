'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { TCategory } from '@/types'
import Image from 'next/image'
import { NoImage } from '../../../../components'

export function Category ({ category }: { category: TCategory }) {
  const pathname = usePathname()
  const isActive = pathname.includes(category.categoryId)

  return (
    <Link
      href={`/products/categories/${category.categoryId}`}
      className={clsx(
        'border-2 hover:border-red-600 rounded-lg p-0.5',
        isActive ? 'border-red-600' : 'border-transparent'
      )}
    >
      <div className='relative h-24 w-24'>
        {category.categoryImageURL ? (
          <Image
            src={category.categoryImageURL}
            alt={category.categoryName}
            width={96}
            height={96}
          />
        ) : (
          <NoImage />
        )}
        <span className='absolute bottom-2 w-full text-center text-white text-xs'>
          {category.categoryName}
        </span>
      </div>
    </Link>
  )
}
