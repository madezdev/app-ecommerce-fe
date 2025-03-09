import { titleFont } from '@/config/fonts'

interface Props {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: Props) => {
  return (
    <div className={ `${ className }` }>
      <h2 className={ `${ titleFont.className } antialiased heading-xs text-sblue text-pretty font-medium ` }>
        { title }
      </h2>
    </div>
  )
}