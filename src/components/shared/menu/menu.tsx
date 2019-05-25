import React, { memo, useEffect } from "react"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import { zIndex } from "@style/variables"
import { themeTone, themeText } from "@style/theme"
import Gutter from "@components/shared/gutter/gutter"
import { typeTitle, typeBaseMedium } from "@style/typography"
import Link from "gatsby-plugin-transition-link"
import { ISocialMeta, IProjects } from "model"
import { OutboundLink } from "gatsby-plugin-google-analytics"

interface Props {
  open?: boolean
}

interface DataProps {
  social: ISocialMeta
  projects: IProjects
}

type AllProps = Props & DataProps

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, projects, social }) => {
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

    const projectItems = Object.keys(projects).map((key, index) => (
      <ProjectListItem key={index}>
        <ProjectLink to={projects[key].path}>{projects[key].label}</ProjectLink>
      </ProjectListItem>
    ))

    const socialItems = Object.keys(social).map((key, index) => (
      <SocialListItem key={index}>
        <SocialLink href={social[key].url} target="_blank">
          {social[key].label}
        </SocialLink>
      </SocialListItem>
    ))

    return (
      <>
        <MenuContainer open={open} ref={containerRef} />
        <MenuContents open={open}>
          <Gutter>
            <MenuContentsInner>
              <div>
                <ListTitle>
                  <ListTitleNumber>01</ListTitleNumber>
                  <ListTitleDivider />
                  Projects
                </ListTitle>
                <ul>{projectItems}</ul>
              </div>
              <div>
                <ListTitle>
                  <ListTitleNumber>02</ListTitleNumber>
                  <ListTitleDivider />
                  Connect
                </ListTitle>
                <ul>{socialItems}</ul>
              </div>
            </MenuContentsInner>
          </Gutter>
        </MenuContents>
      </>
    )
  }
)

const MenuContainer = styled.div<Props>`
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

const MenuContents = styled.div<Props>`
  position: absolute;
  display: flex;

  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.high + 1};

  visibility: ${props => (props.open ? "visible" : "hidden")};
`

const MenuContentsInner = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  max-width: 50%;
  margin: auto;
`

const ProjectListItem = styled.li`
  font-size: 20px;
`

const ProjectLink = styled(Link)`
  ${typeTitle}
`

const SocialListItem = styled.li`
  font-size: 20px;
`

const SocialLink = styled(OutboundLink)`
  ${typeBaseMedium}

  color: ${themeText(900)};
`

const ListTitle = styled.h2`
  ${typeBaseMedium}

  display: flex;
  align-items: center;

  color: ${themeText(1000)};
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
