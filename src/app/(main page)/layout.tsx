import { TopMenu } from '@/components/ui/top-menu/topMenu'

export default function Layout ({
  children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen'>
      <TopMenu />
      {children}
    </main>
  )
}