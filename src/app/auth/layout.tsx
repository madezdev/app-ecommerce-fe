export default function Layout ({
  children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen'>
      <h1>Hello Root Layout </h1>
      {children}
    </main>
  )
}