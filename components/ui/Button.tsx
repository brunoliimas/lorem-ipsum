import { Button as DSButton } from '../ds'

interface ButtonProps {
  name?: string
  href: string
  download?: string
  back?: boolean
}

export default function Button({ name, href, download, back }: ButtonProps) {
  if (back) {
    return (
      <DSButton href={href} variant="line" direction="back">
        Voltar
      </DSButton>
    )
  }

  if (download) {
    return (
      <DSButton href={href} download={download} variant="primary">
        {name}
      </DSButton>
    )
  }

  return (
    <DSButton href={href} variant="primary">
      {name}
    </DSButton>
  )
}
