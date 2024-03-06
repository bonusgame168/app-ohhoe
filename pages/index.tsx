import { NextPage } from 'next'

import HomePromotionSection from '@/components/Home/HomePromotionSection'
import HomeBannerSection from '@/components/Home/HomeBannerSection'
import HomeTrustSection from '@/components/Home/HomeTrustSection'
import HomeGameSection from '@/components/Home/HomeGameSection'
import HomeArticleSection from '@/components/Home/HomeArticleSection'
import HomeAboutusSection from '@/components/Home/HomeAboutusSection'

const Home: NextPage = () => {
  return (
    <>
      <HomeBannerSection />
      <HomePromotionSection />
      <HomeAboutusSection />
      <HomeTrustSection />
      <HomeGameSection />
      <HomeArticleSection />
    </>
  )
}

export default Home
