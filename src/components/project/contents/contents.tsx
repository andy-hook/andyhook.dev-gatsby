import React from "react"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import { TProjectContents } from "@custom-types/model"

interface Props {
  sections: TProjectContents
}

const Contents: React.FunctionComponent<Props> = () => {
  return (
    <Gutter>
      <Limiter>
        <div>hello world</div>
      </Limiter>
    </Gutter>
  )
}

export default Contents
