import { Detail } from '@/components/product/detail'
import { PurchaseProducts } from '@/components/product/purchaseProducts'
import { ProductReviews } from '@/components/product/produtRewiew'
import { QuestionsAndAnswers } from '@/components/product/questionsAndAnswers'
import UserReviewsSlider from '@/components/ui/user-reviews-slider/UserReviewsSlider'
import { titleFont } from '@/config/fonts'
import { initialData } from '@/dataBase/seedProduct'
import Image from 'next/image'
import { DetailForMobile } from '@/components/product/detailForMobile'
import { FavoriteButton } from '@/components/ui/favorite-button/favoriteButton'

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
      <header className='relative h-[300px] lg:h-[400px] w-full'>
        {/* Fondo semitransparente */}
        <div className='absolute inset-0 bg-sblue bg-opacity-50 z-10'></div>

        {/* Imagen de fondo */}
        <Image
          src='/images/img/solares-cabecera.webp'
          alt={title}
          width={1920}
          height={300}
          className='absolute inset-0 h-full w-full object-cover object-center z-0'
        />

        {/* Título centrado */}
        <div className='absolute inset-0 flex items-center justify-center z-20 mt-[120px]'>
          <h1 className={`${titleFont.className} text-center text-nwhite heading-md font-medium`}>
            {title.toUpperCase()}
          </h1>
        </div>
      </header>
      <div className='md:container mx-4 lg:mx-auto p-4 shadow-md bg-nwhite rounded-xl my-8 '>
        {/* Mobile */}
        <div className='md:hidden'>
          {product &&
          <DetailForMobile
            product={product}
            reviewsData={reviewsData}
            userReviewsData={userReviewsData}
          />}
        </div>
        {/*Desktop */}
        <div className='hidden md:flex gap-4 w-full '>
          <section className=' flex flex-col gap-10 w-3/4'>
            {product && <Detail product={product} />}
            <article>
              <QuestionsAndAnswers />
            </article>
            <article className='flex justify-between  w-full'>

              <ProductReviews
                averageRating={reviewsData.averageRating}
                totalReviews={reviewsData.totalReviews}
                distribution={reviewsData.distribution}
              />

              <UserReviewsSlider reviews={userReviewsData} />

            </article>
          </section>
          {/* Purchase Product */}
          <section className='w-1/4 static top-0'>
            {product && <PurchaseProducts detail={product} />}
          </section>
        </div>
      </div>
    </div>
  )
}