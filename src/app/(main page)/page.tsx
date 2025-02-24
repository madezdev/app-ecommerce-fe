import { Bento } from '@/components/bento/bento'
import { Hero } from '@/components/hero/hero'
import { ProductCard } from '@/components/product/product-card'
import { initialData } from '@/dataBase/seedProduct'

export default function Home () {

  return (
    <div className=''>
      <Hero />
      <div className='my-[20px]'>
        <Bento/>
      </div>
      <div className='my-8'>
        <h2>productos destacados</h2>
        {
          initialData.products.map(p => {
            return (
              <ProductCard
                key={p.supplierId}
                slug={p.slug}
                title={p.title}
                brand={p.brand}
                price={p.price}
                image={p.images[0]}
              />
            )
          })
        }

      </div>
    </div>
  )
}
