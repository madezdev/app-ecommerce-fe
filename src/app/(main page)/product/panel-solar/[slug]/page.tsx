import { DetailsProducts } from '@/components/product/detailsProducts'
import { ProductReviews } from '@/components/product/produtRewiew'
import UserReviewsSlider from '@/components/ui/user-reviews-slider/UserReviewsSlider'
import { titleFont } from '@/config/fonts'
import { initialData } from '@/dataBase/seedProduct'
import Image from 'next/image'

type Params = Promise<{ slug: string }>

const reviewsData = {
  averageRating: 4.3,
  totalReviews: 15,
  distribution: [
    { stars: 5, count: 8 },
    { stars: 4, count: 4 },
    { stars: 3, count: 2 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ],
}

const userReviewsData = [
  {
    id: '1',
    username: 'Juan Pérez',
    rating: 4.5,
    comment: 'Excelente producto, superó mis expectativas.',
    date: '2023-06-15',
  },
  {
    id: '2',
    username: 'María López',
    rating: 3.7,
    comment: 'El producto es bueno, pero el servicio podría mejorar.',
    date: '2023-06-10',
  },
  // Agrega más reseñas si lo deseas
]

export default async function ({ params }: { params: Params }) {
  const { slug } = await params
  const parts = slug.split('-')
  const lastWord = parts.pop()
  const title = parts.join(' ')
  console.log('title', title)

  const product = initialData.products.find( product => product.slug === slug )

  return (
    <div className='bg-slate-50' >
      <header className='relative h-[400px] w-full'>
        {/* Fondo semitransparente */}
        <div className='absolute inset-0 bg-sblue bg-opacity-50 z-10'></div>

        {/* Imagen de fondo */}
        <Image
          src='/images/img/solares-cabecera.webp'
          alt='Panel Solar'
          width={1920}
          height={300}
          className='absolute inset-0 h-full w-full object-cover object-center z-0'
        />

        {/* Título centrado */}
        <div className='absolute inset-0 flex items-center justify-center z-20 mt-[120px]'>
          <h1 className={`${titleFont.className} text-nwhite heading-md font-medium`}>
            {title.toUpperCase()}
          </h1>
        </div>
      </header>
      <div className='container mx-auto p-4 shadow-md bg-nwhite rounded-xl my-8 '>
        {/* Product */}
        {product && <DetailsProducts detail={product} />}
        <article className='flex gap-6 items-start justify-start mt-10'>
          <div className='w-1/3'>
            <ProductReviews
              averageRating={reviewsData.averageRating}
              totalReviews={reviewsData.totalReviews}
              distribution={reviewsData.distribution}
            />
          </div>
          <div className='self-end'>
            <UserReviewsSlider reviews={userReviewsData} />
          </div>
        </article>
      </div>
    </div>
  )
}