// import { redirect } from 'next/navigation'
'use client'
import { Title } from '@/components/ui/font-style/title'
import { ProductsInCart } from '@/components/cart/productsInCart'
import { PurchaseSummary } from '@/components/cart/purchaseSummary'
import { ShippingInformation } from '@/components/cart/shippingInformation'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'
import { Logo } from '@/components/ui/logo/logo'
import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import { Paragraph } from '@/components/ui/font-style/paragraph'
import { IoMenu } from 'react-icons/io5'
import { useUIStore } from '@/store/sidebar.store'

export default function CartPage () {
  // redirect('/empty');
  const openSideMenu = useUIStore(state => state.openSideMenu)
  return (
    <>
      <div className='w-full bg-sblue p-4'>
        <nav className='flex justify-between items-center container mx-4 lg:mx-8 xl:mx-auto xl:px-8 sm:px-0'>
          <Logo />
          <h2 className={`${titleFont.className} text-[40px] capitalize text-nwhite`}>carrito de compras</h2>
          <div className='flex justify-end items-center gap-4 lg:mr-[20px]'>
            <Link href='/login'>
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Usuario</Paragraph>
            </Link>
            <button onClick={openSideMenu}>
              <IoMenu className='lg:hidden w-[40px] h-[40px] text-nwhite' />
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Menu</Paragraph>
            </button>
          </div>
        </nav>
      </div>
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