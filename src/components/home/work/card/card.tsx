import React, { memo } from "react"

interface Props {
  label: string
  desc: string
  href: string
}

const Card: React.FunctionComponent<Props> = memo(({ label, desc, href }) => {
  return (
    <>
      {label}
      {desc}
      {href}
    </>
  )
})

export default Card
