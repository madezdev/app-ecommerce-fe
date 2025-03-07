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
      <div className="container mx-auto flex justify-center items-center mb-72 mt-[20px] sm:px-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            {/* Carrito */ }
            <div className="flex flex-col gap-4 w-3/4">
              <Title title='Tus productos' />
              {/* Items */ }
              <ProductsInCart />
            </div>

            {/* Checkout - Resumen de orden */ }
            <PurchaseSummary />
          </div>

        </div>

      </div>
    </>
  )
}