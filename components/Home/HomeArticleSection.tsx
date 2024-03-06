import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import qs from 'qs'
import Link from 'next/link'

import * as strapiApiService from '@/services/strapiApi.service'
import { ArticleAttributesData } from '@/types/article.type'
import { StrapiDataItem } from '@/types/strapi.type'
import HomeSectionDivider from './HomeSectionDivider'
import ArticleCard from '../Article/ArticleCard'

const Slider = dynamic(() => import('@/components/Common/Slider'), { ssr: false })

const HomeArticleSection: React.FC = () => {
  const [articles, setArticles] = useState<StrapiDataItem<ArticleAttributesData>[]>([])
  const settings = {
    dots: false,
    infinite: articles.length > 3,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  useEffect(() => {
    const query = qs.stringify({
      fields: ['slug', 'title', 'description', 'publishedAt'],
      populate: ['image'],
      pagination: {
        page: 1,
        pageSize: 6
      }
    })

    strapiApiService.getAllArticles(query).then((response) => {
      const { data } = response
      setArticles(data)
    })
  }, [])

  return (
    <>
      <HomeSectionDivider />
      <Box className='bg-primary text-white'>
        <Container sx={{ padding: 5 }}>
          <Typography variant='h4' className='text-center font-bold'>
            บทความ
          </Typography>
          <Box sx={{ mt: 8 }}>
            <Slider {...settings}>
              {articles.map((article, index) => (
                <div key={index} className='!inline-flex justify-center'>
                  <Box sx={{ mx: 2 }}>
                    <ArticleCard data={article} />
                  </Box>
                </div>
              ))}
            </Slider>
          </Box>
          <Box sx={{ mt: 4 }} className='flex justify-center'>
            <Link href='/article' className='no-underline'>
              <Button variant='contained' color='primary' aria-label='go to article'>
                บทความทั้งหมด
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <HomeSectionDivider />
    </>
  )
}

export default HomeArticleSection
