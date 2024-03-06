import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import qs from 'qs'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import Chip from '@mui/material/Chip'
import { useRouter } from 'next/router'

import * as strapiApiService from '@/services/strapiApi.service'
import { popupWindows, strapiMediaURL } from '@/utils/common.util'
import { StrapiDataItem } from '@/types/strapi.type'
import { ArticleAttributesData } from '@/types/article.type'
import Seo, { SeoProps } from '@/components/Common/Seo'
import { dateFormat } from '@/utils/formater.util'
import RelatedArticleCard from '@/components/Article/RelatedArticleCard'
import ArticleSearchBox from '@/components/Article/ArticleSearchBox'
import Markdown from '@/components/Common/Markdown'

interface ArticleDetailProps {
  article: StrapiDataItem<ArticleAttributesData>
}

const ArticleDetail: NextPage<ArticleDetailProps> = ({ article }) => {
  const router = useRouter()
  const { title, description, image, updatedAt, publishedAt, content, relatedArticles, tags } = article.attributes
  const { alternativeText, url: imageURL } = image.data.attributes

  const handleClickShare = (type: 'twitter' | 'facebook' | 'line') => {
    const url = window.location.href

    if (type === 'twitter') {
      const openURL = `https://twitter.com/intent/tweet?text=${title} ${url}`
      popupWindows(openURL, title)
    } else if (type === 'facebook') {
      const openURL = `http://www.facebook.com/sharer.php?u=${url}`
      popupWindows(openURL, title)
    } else if (type === 'line') {
      const openURL = `http://line.me/R/msg/text/?${title} ${url}`
      window.open(openURL)
    }
  }

  const seoData: SeoProps = {
    title,
    description,
    shareImageURL: strapiMediaURL(imageURL),
    articleInfo: {
      publishedTime: publishedAt,
      updatedTime: updatedAt,
      slug: article.attributes.slug
    }
  }

  return (
    <>
      <Seo {...seoData} />
      <div className='page-wrapper'>
        <Container>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Card>
                <Box className='aspect-video relative'>
                  <Image src={strapiMediaURL(imageURL)} alt={alternativeText} fill priority />
                </Box>
                <CardContent sx={{ px: { md: 4, xs: 1.5 } }}>
                  <Typography className='font-bold text-[1.75rem]' variant='h1'>
                    {title}
                  </Typography>
                  <Grid container justifyContent='space-between' alignItems='center' sx={{ my: 1 }}>
                    <Grid item xs={6}>
                      <Typography variant='body1' color='text.secondary'>
                        {dateFormat(publishedAt)}
                      </Typography>
                    </Grid>
                    <Grid container item xs={6} justifyContent='end' gap={1}>
                      <Button
                        onClick={() => handleClickShare('facebook')}
                        className='min-w-fit'
                        aria-label='share to facebook'
                      >
                        <FacebookIcon className='text-3xl md:text-4xl' />
                      </Button>
                      <Button
                        onClick={() => handleClickShare('twitter')}
                        className='min-w-fit'
                        aria-label='share to twitter'
                      >
                        <TwitterIcon className='text-3xl md:text-4xl' />
                      </Button>
                      <Button onClick={() => handleClickShare('line')} className='min-w-fit' aria-label='share to line'>
                        <Image src='/images/ic-line-brand.webp' width={30} height={30} alt='line icon' unoptimized />
                      </Button>
                    </Grid>
                  </Grid>
                  {content && <Markdown content={content} />}
                  {tags && tags.data.length > 0 && (
                    <Box className='flex' sx={{ gap: 1 }}>
                      <Typography>Tag:</Typography>
                      <Box className='flex flex-wrap' sx={{ gap: 1 }}>
                        {tags.data.map((item) => (
                          <Chip
                            color='primary'
                            key={item.id}
                            label={item.attributes.name}
                            onClick={() => router.push(`/article?tag=${item.attributes.name}`)}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className='px-0 md:px-[16px] mt-[8px] md:mt-0'>
              <Card>
                <CardContent>
                  <ArticleSearchBox onSearch={(value) => router.push(`/article?term=${value}`)} />
                  {relatedArticles.data.length > 0 && (
                    <>
                      <Typography variant='h5'>บทความที่เกี่ยวข้อง</Typography>
                      {relatedArticles.data.map((article) => (
                        <RelatedArticleCard data={article} key={article.id} />
                      ))}
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const query = qs.stringify({
      filters: {
        slug: context.params?.slug
      },
      populate: ['image', 'tags', 'relatedArticles.image']
    })
    const articles = await strapiApiService.getAllArticles(query)

    return {
      props: { article: articles.data[0] }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default ArticleDetail
