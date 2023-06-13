import { BsSearch } from 'react-icons/bs'
import Image from 'next/image'

export function SearchField ({ id }: { id: string }) {
  return (
    <div className='flex items-center justify-between relative w-full'>
      <label htmlFor={id} className='absolute mx-3'>
        <BsSearch />
      </label>
      <input
        id={id}
        className='px-10 py-3 pr-3 bg-gray-100 text-sm rounded w-full'
        placeholder='Search...'
      />
    </div>
  )
}

export function NoImage () {
  return (
    <Image
      src='https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'
      alt='not-found'
      width={96}
      height={96}
    />
  )
}
