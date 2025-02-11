export default function Layout ({
  children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen mx-[12vw]'>
      {children}
    </main>
  )
}