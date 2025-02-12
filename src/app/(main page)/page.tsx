import { paragraph, titleFont } from '@/config/fonts'

export default function Home () {

  return (
    <div>
      <h1 className={titleFont.className}>Home</h1>
      <h1 className={`${paragraph.className} text-4xl font-extralight`}>Home</h1>

    </div>
  )
}
