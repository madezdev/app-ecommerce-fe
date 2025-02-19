import { Bento } from '@/components/bento/bento'
import { Hero } from '@/components/hero/hero'

export default function Home () {

  return (
    <div className=''>
      <Hero />
      <div className='my-[20px]'>
        <Bento/>
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  )
}
