import { Bento } from '@/components/home/bento/bento'
import { Discounts } from '@/components/home/discounts/discounts'
import { FeaturedProducts } from '@/components/home/featured-products/featuredProducts'
import { Hero } from '@/components/home/hero/hero'
import { SolutionHero } from '@/components/home/solution-hero/solutionHero'
import { Title } from '@/components/ui/font-style/title'

export default function Home () {
  return (
    <>
      <Hero />
      <div className='container mx-auto px-4 md:px-0'>
        <div className='my-[20px]'>
          <Bento />
        </div>
        <section className='my-8 w-full bg-white p-8 rounded-xl shadow-lg'>
          <SolutionHero />
        </section>
        <section className=' my-8 w-full '>
          <Discounts />
        </section>
        <section className='my-8 w-full bg-white p-4 rounded-xl shadow-lg'>
          <Title title='Productos Destacados' />
          <FeaturedProducts />
        </section>
      </div>
    </>
  )
}
