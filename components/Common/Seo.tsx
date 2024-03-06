import Head from 'next/head'

export interface SeoProps {
  title: string
  description: string
  keywords?: string
  shareImageURL?: string
  articleInfo?: {
    publishedTime: string
    updatedTime: string
    slug: string
  }
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords, shareImageURL, articleInfo }) => {
  const imageURL = shareImageURL ?? ''

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='th_TH' />
      <meta property='og:site_name' content='bonusgame168' />
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageURL} />
      <meta property='og:image:secure_url' content={imageURL} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageURL} />

      {/* Article */}
      {articleInfo && (
        <>
          <meta property='og:type' content='article' />
          <meta property='og:updated_time' content={articleInfo.updatedTime} />
          <meta property='article:publisher' content='https://bonusgame168.com/' />
          <meta property='article:author' content='bonusgame168' />
          <meta property='article:published_time' content={articleInfo.publishedTime} />
          <meta property='article:modified_time' content={articleInfo.updatedTime} />
          <link rel='canonical' href={`https://bonusgame168.com/article/${articleInfo.slug}`} />
        </>
      )}
    </Head>
  )
}

export default Seo
