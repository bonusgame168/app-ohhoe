export interface StrapiDataItem<T> {
  id: number
  attributes: T
}

export interface StrapiMediaItemData {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: StrapiMediaFormatsData
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface StrapiMediaFormatsData {
  small?: StrapiMediaFormatDataItem
  medium?: StrapiMediaFormatDataItem
  large?: StrapiMediaFormatDataItem
  thumbnail: StrapiMediaFormatDataItem
}

export interface StrapiMediaFormatDataItem {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

export interface StrapiMetaData {
  pagination: StrapiMetaPaginationData
}

export interface StrapiMetaPaginationData {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export interface StrapiPaginationData<T> {
  data: T
  meta: StrapiMetaData
}
