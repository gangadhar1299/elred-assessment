export type TCategory = {
  categoryName: string
  categoryImageURL: string
  categoryId: string
}

export type TSubCategory = {
  subCategoryName: string
  subCategoryImageURL: string
  categoryId: string
  subCategoryId: string
}

export type TProduct = {
  companyUserCode: string
  categoryId: string
  subCategoryId: string
  itemNumber: string
  itemDescription: string
  expiryPeriod: string
  variants: Array<{
    _id: string
    bpCatalogNumber: string
    colorCode: string
    colorDescription: string
    packingCode: string
    packingDescription: string
    saleDescription: string
    variantId: string
    grossPrice: string
  }>
  productImages: Array<string>
  productId: string
  currency: {
    type: string
    symbol: string
  }
  priceTerms: string
}
