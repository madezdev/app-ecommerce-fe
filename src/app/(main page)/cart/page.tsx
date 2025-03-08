// import { redirect } from 'next/navigation'
import { Title } from '@/components/ui/font-style/title'
import { ProductsInCart } from '@/components/cart/productsInCart'
import { Header } from '@/components/ui/header/header'
import { PurchaseSummary } from '@/components/cart/purchaseSummary'

export default function () {
  // redirect('/empty');

  return (
    <>
      <Header title='Carrito de compras' img='hero-cart-sostenible' />
      <div className="xl:container mx-4 lg:mx-8 xl:mx-auto mb-[20px] lg:mb-72 mt-[20px] sm:px-0">

        <Title title='Tus productos' />
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start gap-10 w-full mt-4">
          {/* Carrito */ }
          <div className="flex flex-col gap-4 w-full xl:w-3/4">
            {/* Items */ }
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */ }
          <PurchaseSummary />
        </div>

      </div>
    </>
  )
}