import { TCategory, TSubCategory } from '@/types'

type TGetProductsResponse = {
  success: boolean
  isAuth: boolean
  message: string
  totalCategoryCount: number
  result: Array<any>
}

export async function getProducts (
  subCategoryId: string
): Promise<TGetProductsResponse> {
  const response = await fetch(
    `https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${subCategoryId}.json`
  )

  if (!response.ok) {
    throw new Error('Error fetching products!')
  }

  return response.json()
}

type GetCategoriesResponse = {
  success: boolean
  isAuth: boolean
  message: string
  totalCategoryCount: number
  result: Array<TCategory>
}

export async function getCategories (): Promise<GetCategoriesResponse> {
  const response = await fetch(
    'https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json'
  )

  if (!response.ok) {
    throw new Error('Something went wrong while fetching categories!')
  }

  return response.json()
}

type GetSubCategoriesResponse = {
  success: boolean
  isAuth: boolean
  message: string
  totalSubCategoryCount: number
  result: Array<TSubCategory>
}

export async function getSubCategories (
  categoryId: string
): Promise<GetSubCategoriesResponse> {
  const response = await fetch(
    `https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${categoryId}.json`
  )

  if (!response.ok) {
    throw new Error(`Error fetching sub categories for ${categoryId}`)
  }

  return response.json()
}
