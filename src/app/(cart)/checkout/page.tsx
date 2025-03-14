// import { redirect } from 'next/navigation'
import { Title } from '@/components/ui/font-style/title'
import { ProductsInCart } from '@/components/cart/productsInCart'
import { PurchaseSummary } from '@/components/cart/purchaseSummary'
import { ShippingInformation } from '@/components/cart/shippingInformation'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'
import { Logo } from '@/components/ui/logo/logo'
import { titleFont } from '@/config/fonts'

export default function CheckoutPage () {

  return (
    <>
      <div className='w-full bg-sblue p-4'>
        <nav className='flex justify-between items-center container mx-4 lg:mx-8 xl:mx-auto xl:px-8 sm:px-0'>
          <Logo />
          <h2 className={`${titleFont.className} text-[40px] capitalize text-nwhite`}>Resumen de compra</h2>
        </nav>
      </div>
      <div className="xl:container mx-4 lg:mx-8 xl:mx-auto my-[20px] pb-[40px] xl:px-8 sm:px-0">
        <BtnVolver path='cart' />
        <Title title='Tus productos' />
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start gap-10 w-full mt-4">
          {/* Carrito */ }
          <div className="flex flex-col gap-4 w-full xl:w-3/4 ">
            {/* Items */ }
            <ProductsInCart showQuantity={false}/>
          </div>

          {/* Checkout - Resumen de orden */ }
          <div className="flex flex-col gap-4 flex-shrink-0">
            <ShippingInformation showButtonChange={false}/>
            <PurchaseSummary path='order' id={123} button='Pagar' />
          </div>
        </div>

      </div>
    </>
  )
}