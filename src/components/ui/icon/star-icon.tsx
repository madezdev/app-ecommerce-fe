interface Props {
  width?: string
  height?: string
  color?: string
  props?: React.SVGProps<SVGSVGElement>
}

export function StarIcon ({ width, height, color, props }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
    </svg>
  )
}