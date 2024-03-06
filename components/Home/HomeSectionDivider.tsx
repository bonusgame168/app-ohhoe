import Image from 'next/image'

const HomeSectionDivider: React.FC = () => {
  return (
    <div className={'w-full h-[8px] relative'}>
      <Image
        src='/images/section-divider.webp'
        alt='section divider'
        fill
        className='object-fill h-full w-full'
        unoptimized
      />
    </div>
  )
}

export default HomeSectionDivider
