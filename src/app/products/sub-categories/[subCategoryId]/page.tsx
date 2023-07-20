import { SearchField } from '@/components'
import { getProducts } from '@/services'
import { TProduct } from '@/types'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

export default function ProductsPage ({
  params: { subCategoryId }
}: {
  params: { subCategoryId: string }
}) {
  const productsPromise = getProducts(subCategoryId)

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-2xl flex items-center gap-2'>
          <Link href={`../categories`}>
            <IoMdArrowRoundBack />
          </Link>
          All Products
        </h1>
        <div className='w-1/2'>
          <SearchField id='categories-search' />
        </div>
      </div>
      <React.Suspense fallback={<p>Loading products...</p>}>
        <Products productsPromise={productsPromise} />
      </React.Suspense>
    </>
  )
}

async function Products ({
  productsPromise
}: {
  productsPromise: ReturnType<typeof getProducts>
}) {
  const productsResponse = await productsPromise

  return (
    <div>
      {(await productsPromise).result.map(product => (
        <Product product={product} key={product.productId} />
      ))}
    </div>
  )
}

function Product ({ product }: { product: TProduct }) {
  return <>{product.itemDescription}</>
}
