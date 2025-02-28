import { Bento } from '@/components/home/bento/bento'
import { FeaturedProducts } from '@/components/home/featured-products/featuredProducts'
import { Hero } from '@/components/home/hero/hero'
import { SolutionHero } from '@/components/ui/solution-hero/solutionHero'
import { titleFont } from '@/config/fonts'

export default function Home () {
  return (
    <>
      <Hero />
      <div className='container mx-auto px-4 md:px-0'>
        <div className='my-[20px]'>
          <Bento />
        </div>
        <section className='my-8 w-full bg-white p-8 rounded-lg'>
          <SolutionHero />
        </section>
        <section className='my-8 w-full bg-white p-8 rounded-lg'>
          <h2 className={`${titleFont.className} heading-xs text-sblue`}>
            Estos productos te pueden interesar
          </h2>
          <FeaturedProducts />
        </section>
      </div>
    </>
  )
}
