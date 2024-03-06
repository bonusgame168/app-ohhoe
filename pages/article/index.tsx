import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import qs from 'qs'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'

import * as strapiApiService from '@/services/strapiApi.service'
import { ArticleAttributesData } from '@/types/article.type'
import { StrapiDataItem } from '@/types/strapi.type'
import ArticleCard from '@/components/Article/ArticleCard'

const Article: NextPage = () => {
  const router = useRouter()
  const [articles, setArticles] = useState<StrapiDataItem<ArticleAttributesData>[]>([])
  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const { term, tag } = router.query

  useEffect(() => {
    const query = qs.stringify({
      filters: {
        title: {
          $contains: term
        },
        tags: {
          name: tag
        }
      },
      fields: ['slug', 'title', 'description', 'publishedAt'],
      populate: ['image'],
      pagination: {
        page: currentPage,
        pageSize: 6
      }
    })

    const controller = new AbortController()
    strapiApiService
      .getAllArticles(query, controller.signal)
      .then((response) => {
        const { meta, data } = response
        const { page, pageCount } = meta.pagination
        setArticles(data)
        setTotalPage(pageCount)
        setCurrentPage(page)
      })
      .catch(() => {})

    return () => {
      controller.abort()
    }
  }, [currentPage, term, tag])

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className='page-wrapper'>
      <Container>
        <Grid container>
          {articles.map((item) => (
            <Grid item key={item.id} xs={12} sm={4} sx={{ p: 1 }}>
              <ArticleCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Box className='flex justify-center' sx={{ mt: 2 }}>
          <Pagination
            count={totalPage}
            size='large'
            color='primary'
            page={currentPage}
            onChange={(_: React.ChangeEvent<unknown>, page: number) => handleChangePage(page)}
          />
        </Box>
      </Container>
    </div>
  )
}

export default Article
