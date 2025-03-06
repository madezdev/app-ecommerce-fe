import { Footer } from '@/components/ui/footer/footer'
import { Sidebar } from '@/components/ui/sidebar/sidebar'
import { TopInformation } from '@/components/ui/top-information/topInformation'
import { TopMenu } from '@/components/ui/top-menu/topMenu'

export default function Layout ({
  children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen overflow-x-hidden flex flex-col justify-between'>
      <div className='absolute top-0 left-0 w-full z-20'>
        <TopInformation />
        <TopMenu />
      </div>
      <Sidebar />
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}