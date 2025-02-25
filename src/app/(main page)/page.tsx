import { Bento } from '@/components/home/bento/bento'
import { FeaturedProducts } from '@/components/home/featured-products/featuredProducts'
import { Hero } from '@/components/home/hero/hero'

export default function Home () {

  return (
    <>
      <Hero />
      <div className='my-[20px]'>
        <Bento/>
      </div>
      <section className='my-8 px-10'>
        <h2>productos destacados</h2>
        <FeaturedProducts />
      </section>
    </>
  )
}
