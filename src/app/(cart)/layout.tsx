import { Sidebar } from '@/components/ui/sidebar/sidebar'

interface Props {
  children: React.ReactNode
}

export default  function Layout ({ children }: Props) {

  return (
    <div className='relative min-h-screen overflow-x-hidden flex flex-col justify-between'>
      <main className='flex-1'>
        {children}
      </main>
      <Sidebar />
      <footer className='bg-sblue p-4'>
        <div className='container mx-4 lg:mx-8 xl:mx-auto xl:px-8 sm:px-0'>
          <div className='flex justify-between items-center gap-4'>
            <p className='text-ngray text-sm text-nwhite'>© 2021 Todos los derechos reservados a Mercado Solar</p>
            <p className='text-ngray text-sm text-nwhite'>Términos y condiciones</p>
          </div>
        </div>
      </footer>
    </div>
  )
}