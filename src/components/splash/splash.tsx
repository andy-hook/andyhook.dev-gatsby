import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { between } from "polished"
import Social from "../social/social"
import Logo from "./logo"
import { ContainerProps } from "./splash-container"
import Details from "./details"
import Background from "./background"
import { uniformScale, mq } from "../../style/utils"
import { emBreakpoints, typeScale } from "../../style/variables"

interface Props {
  visible?: boolean
}

type AllProps = Props & ContainerProps

const Splash: React.FunctionComponent<AllProps> = ({
  metaData,
  visible = true,
}) => {
  const [elementsVisible, showElements] = useState(false)

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        showElements(true)
      }, 650)
    }
  })

  return (
    <Container>
      <Logo visible={elementsVisible} />
      <Details
        buttonHref={`mailto:${metaData.email}`}
        visible={elementsVisible}
      />
      <SocialIcons items={metaData.social} visible={elementsVisible} />
      <Background visible={elementsVisible} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const SocialIcons = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 9vh;

  z-index: 1;

  font-size: ${typeScale[6]};

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[6],
      typeScale[8],
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[8], "topUltra")};
  `}
`

export default Splash
