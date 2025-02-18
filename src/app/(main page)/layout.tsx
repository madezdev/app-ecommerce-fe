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
    <main className='relative min-h-screen overflow-x-hidden flex flex-col justify-between'>
      <TopInformation />
      <TopMenu />
      <Sidebar />
      <section className='flex-1'>
        {children}
      </section>
      <Footer />
    </main>
  )
}