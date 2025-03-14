import { OrderCard } from '@/components/cart/orderCart'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'
import { Logo } from '@/components/ui/logo/logo'
import { titleFont } from '@/config/fonts'

export default function () {
  return (
    <>
      <div className='w-full bg-sblue p-4'>
        <nav className='flex justify-between items-center xl:container mx-4 lg:mx-8 xl:mx-auto xl:px-8 sm:px-0'>
          <Logo />
          <h2 className={`${titleFont.className} text-[20px] lg:text-[20px] text-nwhite`}>Tus ordenes de compra</h2>
        </nav>
      </div>

      <section className="xl:container mx-4 lg:mx-8 xl:mx-auto my-[20px] pb-[40px] xl:px-8 sm:px-0">
        <BtnVolver path='' />
        <OrderCard/>
      </section>
    </>
  )
}