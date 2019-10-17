import React, { memo, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Home: React.FunctionComponent<Props> = memo(({ children }) => {
  return <>{children}</>
})

export default Home
