// import { redirect } from 'next/navigation'
import { Title } from '@/components/ui/font-style/title'
import { ProductsInCart } from '@/components/cart/productsInCart'
import { Header } from '@/components/ui/header/header'
import { PurchaseSummary } from '@/components/cart/purchaseSummary'
import { ShippingInformation } from '@/components/cart/shippingInformation'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'

export default function CartPage () {
  // redirect('/empty');

  return (
    <>
      <Header title='Carrito de compras' img='hero-cart-sostenible' />
      <div className="xl:container mx-4 lg:mx-8 xl:mx-auto my-[20px] pb-[40px] xl:px-8 sm:px-0">
        <BtnVolver path='' />
        <Title title='Tus productos' />
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start gap-10 w-full mt-4">
          {/* Carrito */ }
          <div className="flex flex-col gap-4 w-full xl:w-3/4 ">
            {/* Items */ }
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */ }
          <div className="flex flex-col gap-4 flex-shrink-0">
            <ShippingInformation />
            <PurchaseSummary path='checkout' button='Confirmar' />
          </div>
        </div>

      </div>
    </>
  )
}