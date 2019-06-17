import React, { memo, useEffect } from "react"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import { zIndex } from "@style/variables"
import { themeTone, themeText } from "@style/theme"
import Gutter from "@components/shared/gutter/gutter"
import {
  typeTitle,
  typeBaseMedium,
  typeSupTitle,
  typeSizeBaseXs,
  typeSizeBaseLg,
  typeSizeDisplayMd,
} from "@style/typography"
import Link from "gatsby-plugin-transition-link"
import { ISocialMeta, TProjects } from "model"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { mq, scaleBetween } from "@style/media-queries"
import { keys } from "@custom-types/utils"
import { TweenMax, Expo } from "gsap"
import { IStore } from "store"

interface Props {
  open: boolean
  firstEntrance: boolean
  setMenuOpen: (isOpen: IStore["menuOpen"]) => void
}

export interface DispatchProps {
  setMenuOpen: (isOpen: IStore["menuOpen"]) => void
}

interface DataProps {
  social: ISocialMeta
  projects: TProjects
}

type AllProps = Props & DataProps

export let menuIsAnimating = false
let routeTransition = false

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, projects, social, firstEntrance }) => {
    const backboardRef = React.useRef() as Ref
    const contentsRef = React.useRef() as Ref
    const containerRef = React.useRef() as Ref

    const animateOpen = () => {
      menuIsAnimating = true

      TweenMax.set(containerRef.current, { visibility: "visible" })

      // Backboard
      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          opacity: 1,
          y: "-100%",
        },
        {
          ease: Expo.easeOut,
          y: "0%",
          onComplete: () => {
            menuIsAnimating = false
          },
        }
      )

      // Contents
      TweenMax.fromTo(
        contentsRef.current,
        0.25,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    }

    const animateClose = () => {
      menuIsAnimating = true

      // Backboard
      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          y: "0%",
        },
        {
          ease: Expo.easeOut,
          y: "-100%",
          clearProps: "transform, opacity",
          onComplete: () => {
            routeTransition = false
            menuIsAnimating = false

            TweenMax.set(containerRef.current, { clearProps: "visibility" })
          },
        }
      )

      // Contents
      TweenMax.fromTo(
        contentsRef.current,
        0.25,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    }

    const animateRouteClose = () => {
      menuIsAnimating = true

      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          y: "0%",
        },
        {
          ease: Expo.easeOut,
          y: "100%",
          clearProps: "transform, opacity",
          onComplete: () => {
            routeTransition = false
            menuIsAnimating = false

            TweenMax.set(containerRef.current, { clearProps: "visibility" })
          },
        }
      )

      // Contents
      TweenMax.fromTo(
        contentsRef.current,
        0.25,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    }

    useEffect(() => {
      // Don't run an animation on the first entrance as it should already be in a resting hidden state
      if (!firstEntrance) {
        open
          ? animateOpen()
          : routeTransition
          ? animateRouteClose()
          : animateClose()
      }
    }, [open])

    const handleProjectClick = () => {
      routeTransition = true
    }

    const projectItems = keys(projects).map((key, index) => (
      <ProjectListItem key={index}>
        <ProjectLink
          onClick={handleProjectClick}
          to={projects[key].path}
          exit={{
            length: 0,
          }}
          entry={{
            length: 0.75,
            state: {
              animType: "enter-from-nav",
            },
          }}
        >
          {projects[key].label}
        </ProjectLink>
      </ProjectListItem>
    ))

    const socialItems = keys(social).map((key, index) => (
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
        <Container ref={containerRef}>
          <Gutter>
            <MenuContents ref={contentsRef}>
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
        </Container>

        <MenuBackboard ref={backboardRef} />
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

const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  z-index: ${zIndex.high + 1};

  visibility: hidden;

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

  opacity: 0;

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
  ${typeSizeDisplayMd}
  margin-top: -${projectItemPadding};
  margin-bottom: 1.75em;

  ${mq.greaterThan("topPalm")`
    flex-direction: column;

    margin-bottom: -${projectItemPadding};
  `}
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
  ${typeSizeBaseLg}
  margin-top: -${socialItemPadding};
  margin-bottom: -${socialItemPadding};
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
  ${typeSupTitle}
  ${typeSizeBaseXs}

  display: flex;
  align-items: center;

  margin-bottom: 1.75em;

  ${mq.greaterThan("topPalm")`
    margin-bottom: 2.3em;
  `}

  ${mq.greaterThan("topDesk")`
    margin-bottom: 3.5em;
  `}
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
