import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { StrapiDataItem } from '@/types/strapi.type'
import { ArticleAttributesData } from '@/types/article.type'
import { strapiMediaURL } from '@/utils/common.util'
import { dateFormat } from '@/utils/formater.util'

interface RelatedArticleCardProps {
  data: StrapiDataItem<ArticleAttributesData>
}

const RelatedArticleCard: React.FC<RelatedArticleCardProps> = ({ data }) => {
  const { title, image, description, publishedAt, slug } = data.attributes
  return (
    <ButtonBase className='h-full'>
      <Link href={`/article/${slug}`} className='no-underline'>
        <Card className='cursor-pointer text-left h-full'>
          <CardContent className='flex' sx={{ gap: 2 }}>
            <Image
              src={strapiMediaURL(image.data.attributes.formats.small?.url)}
              alt={description}
              width={120}
              height={120}
              className='max-w-full object-contain h-auto rounded'
            />
            <Box>
              <Typography variant='body1' className='line-clamp-2'>
                {title}
              </Typography>
              <Typography variant='caption' className='line-clamp-2' color='text.secondary'>
                {dateFormat(publishedAt)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </ButtonBase>
  )
}

export default RelatedArticleCard
