type Params = Promise<{ slug: string }>

export default async function ({ params }: { params: Params }) {
  const { slug } = await params
  const parts = slug.split('-')
  const lastWord = parts.pop()
  const title = parts.join(' ')
  console.log('title', title)

  return (
    <div>
      <h1>{ title.toUpperCase() }</h1>
    </div>
  )
}