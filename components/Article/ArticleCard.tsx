import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import AccessTime from '@mui/icons-material/AccessTime'
import ButtonBase from '@mui/material/ButtonBase'
import Link from 'next/link'

import { StrapiDataItem } from '@/types/strapi.type'
import { ArticleAttributesData } from '@/types/article.type'
import { strapiMediaURL } from '@/utils/common.util'
import { dateFormat } from '@/utils/formater.util'

interface ArticleCardProps {
  data: StrapiDataItem<ArticleAttributesData>
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data }) => {
  const { attributes } = data
  const { title, description, image, publishedAt, slug } = attributes
  const { alternativeText, formats } = image.data.attributes
  const imageFormat = formats.small ?? formats.thumbnail
  const { url: imageUrl, height: imageHeight, width: imageWidth } = imageFormat

  return (
    <ButtonBase className='h-full'>
      <Link href={`/article/${slug}`} className='no-underline h-full'>
        <Card className='cursor-pointer text-left h-full'>
          <Box className='flex justify-center'>
            <Image
              src={strapiMediaURL(imageUrl)}
              alt={alternativeText}
              height={imageHeight}
              width={imageWidth}
              className='max-w-full h-auto'
              priority
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant='h5' className='line-clamp-2'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary' className='line-clamp-2'>
              {description}
            </Typography>
            <Box sx={{ gap: 1, mt: 1, display: 'inline-flex', alignItems: 'center' }}>
              <Typography variant='caption' color='text.secondary' sx={{ lineHeight: 1 }}>
                <AccessTime fontSize='small' />
              </Typography>
              <Typography fontSize='small' variant='caption' color='text.secondary'>
                {dateFormat(publishedAt)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </ButtonBase>
  )
}

export default ArticleCard
