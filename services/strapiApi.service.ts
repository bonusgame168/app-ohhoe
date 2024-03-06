import { GenericAbortSignal } from 'axios'

import { ArticleAttributesData } from '@/types/article.type'
import strapiBonusGameHttpClient from '@/utils/strapiBonusGameHttpClient'
import { StrapiDataItem, StrapiPaginationData } from '@/types/strapi.type'
import { AnnouncementAttributesData } from '@/types/announcement.type'

export const getAllArticles = async (
  query: string,
  signal?: GenericAbortSignal
): Promise<StrapiPaginationData<[StrapiDataItem<ArticleAttributesData>]>> => {
  const response = await strapiBonusGameHttpClient.get(`/api/articles?${query}`, { signal })
  return response.data
}

export const getAnnouncement = async (): Promise<StrapiPaginationData<StrapiDataItem<AnnouncementAttributesData>>> => {
  const response = await strapiBonusGameHttpClient.get(`/api/announcement`)
  return response.data
}
