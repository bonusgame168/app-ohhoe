import { StrapiDataItem, StrapiMediaItemData, StrapiMetaData } from './strapi.type'
import { TagAttributesData } from './tag.type'

export interface ArticleAttributesData {
  slug: string
  title: string
  description: string
  image: {
    data: StrapiDataItem<StrapiMediaItemData>
  }
  tags?: { data: [StrapiDataItem<TagAttributesData>] }
  content?: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  relatedArticles: { data: [StrapiDataItem<ArticleAttributesData>] }
}
