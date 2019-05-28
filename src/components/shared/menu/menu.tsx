import React, { memo, useEffect } from "react"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import { zIndex, typeScale } from "@style/variables"
import { themeTone, themeText } from "@style/theme"
import Gutter from "@components/shared/gutter/gutter"
import { typeTitle, typeBaseMedium } from "@style/typography"
import Link from "gatsby-plugin-transition-link"
import { ISocialMeta, IProjects } from "model"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { mq, scaleBetween, scaleGreaterThan } from "@style/utils"
import { DispatchProps } from "./menu.container"

interface Props {
  open?: boolean
}

interface DataProps {
  social: ISocialMeta
  projects: IProjects
}

type AllProps = Props & DataProps & DispatchProps

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, projects, social, setMenuOpen }) => {
    const containerRef = React.useRef() as Ref

    const animateOpen = () => {
      TweenMax.set(containerRef.current, {
        opacity: 1,
      })
      TweenMax.to(containerRef.current, 0.5, {
        ease: Expo.easeOut,
        y: "0%",
      })
    }

    const animateClose = () => {
      TweenMax.to(containerRef.current, 0.5, {
        ease: Expo.easeOut,
        y: "-100%",
        clearProps: "transform opacity",
      })
    }

    const triggerAnimation = () => {
      return open ? animateOpen() : animateClose()
    }

    useEffect(() => {
      triggerAnimation()
    })

    const handleProjectClick = () => {
      if (open) {
        setMenuOpen(false)
      }
    }

    const projectItems = Object.keys(projects).map((key, index) => (
      <ProjectListItem key={index}>
        <ProjectLink onClick={handleProjectClick} to={projects[key].path}>
          {projects[key].label}
        </ProjectLink>
      </ProjectListItem>
    ))

    const socialItems = Object.keys(social).map((key, index) => (
      <SocialListItem key={index}>
        <SocialLink
          href={social[key].url}
          target={social[key].url.includes("mailto:") ? "" : "_blank"}
        >
          {social[key].label}
        </SocialLink>
      </SocialListItem>
    ))

    return (
      <>
        <MenuBackboard ref={containerRef} />
        <MenuContainer open={open}>
          <Gutter>
            <MenuContents>
              {/* Projects */}
              <ProjectsContainer>
                <ListTitle>
                  <ListTitleNumber>01</ListTitleNumber>
                  <ListTitleDivider />
                  Projects
                </ListTitle>
                <ProjectList>{projectItems}</ProjectList>
              </ProjectsContainer>
              {/* Social */}
              <SocialContainer>
                <ListTitle>
                  <ListTitleNumber>02</ListTitleNumber>
                  <ListTitleDivider />
                  Connect
                </ListTitle>
                <SocialList>{socialItems}</SocialList>
              </SocialContainer>
            </MenuContents>
          </Gutter>
        </MenuContainer>
      </>
    )
  }
)

const MenuBackboard = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${themeTone(100)};
  transform: translate3d(0, -100%, 0);

  z-index: ${zIndex.high};
  opacity: 0;
`

const MenuContainer = styled.div<Props>`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  z-index: ${zIndex.high + 1};

  visibility: ${props => (props.open ? "visible" : "hidden")};

  ${mq.lessThan("bottomThumb")`
    padding-top: 14rem;
  `}

  ${scaleBetween("padding-top", "14rem", "14rem", "topThumb", "bottomPalm")}

  ${mq.greaterThan("topPalm")`
    display: flex;

    align-items: center;
  `}
`

const MenuContents = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  ${mq.lessThan("bottomPalm")`
    flex-direction: column;
  `}

  ${mq.lessThan("bottomPalm")`
    padding-left: 2rem;
  `}
`
const ProjectsContainer = styled.div``

const SocialContainer = styled.div``

const projectItemPadding = "0.22em"

const ProjectList = styled.ul`

  margin-top: -${projectItemPadding};
  margin-bottom: 1.75em;

  font-size: ${typeScale[8]};

  ${mq.greaterThan("topPalm")`
    flex-direction: column;

    margin-bottom: -${projectItemPadding};
  `}

  ${scaleBetween(
    "font-size",
    typeScale[8],
    typeScale[9],
    "topThumb",
    "bottomDesk"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[9],
    typeScale[10],
    "topDesk",
    "bottomWall"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[10],
    typeScale[11],
    "topWall",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[11], "topUltra")}
`

const ProjectListItem = styled.li`
  min-width: 8em;
  margin-right: 6em;

  ${scaleBetween("margin-right", "2.75rem", "11.4rem", "topPalm", "bottomLap")}
`

const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: ${projectItemPadding};
  padding-bottom: ${projectItemPadding};
`
const socialItemPadding = "0.4em"

const SocialList = styled.ul`
  margin-top: -${socialItemPadding};
  margin-bottom: -${socialItemPadding};

  font-size: ${typeScale[4]};
  
  ${scaleBetween(
    "font-size",
    typeScale[4],
    typeScale[6],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[6],
    typeScale[7],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[7], "topUltra")}
`

const SocialListItem = styled.li``

const SocialLink = styled(OutboundLink)`
  ${typeBaseMedium}
  
  /* Offset item padding for clean layout edge */
  padding-top: ${socialItemPadding};
  padding-bottom: ${socialItemPadding};
  padding-right: 2em;

  display: block;
  color: ${themeText(900)};
`

const ListTitle = styled.h2`
  ${typeBaseMedium}

  display: flex;
  align-items: center;

  color: ${themeText(1000)};

  margin-bottom: 1.75em;

  font-size: ${typeScale[3]};

  ${mq.greaterThan("topPalm")`
    margin-bottom: 2.3em;
  `}

  ${mq.greaterThan("topDesk")`
    margin-bottom: 3.5em;
  `}

  ${scaleBetween(
    "font-size",
    typeScale[3],
    typeScale[4],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[4], "topUltra")}
`

const ListTitleNumber = styled.span`
  font-size: 0.85em;
`

const ListTitleDivider = styled.span`
  height: 0.063em;
  min-height: 1px;
  width: 0.7em;
  background-color: currentColor;
  margin-left: 0.5em;
  margin-right: 0.5em;
`

export default Menu
