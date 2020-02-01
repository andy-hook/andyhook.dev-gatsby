import React, { memo } from "react"
import CommonPage from "@components/shared/common-page/common-page"
import Gutter from "@components/shared/gutter/gutter"

const Playground: React.FunctionComponent = memo(() => {
  return (
    <CommonPage>
      <Gutter>This is the playground page</Gutter>
    </CommonPage>
  )
})

export default Playground
