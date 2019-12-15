import React, { memo, PropsWithChildren } from "react"
import Project from "./project"
import { ProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { Store } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import PageContainer from "@components/shared/page/page.container"

interface Props {
  projectName: ProjectNames
}

interface StoreProps {
  firstEntrance: Store["firstEntrance"]
  loaderVisible: Store["loaderVisible"]
}

const mapStateToProps = ({ firstEntrance, loaderVisible }: Store) => {
  return { firstEntrance, loaderVisible }
}

type AllProps = Props & StoreProps

const ProjectContainer: React.FunctionComponent<
  PropsWithChildren<AllProps>
> = memo(({ children, projectName, firstEntrance, loaderVisible }) => {
  const transitionState = useTransitionState()

  const { projectsData } = useStaticQuery(graphql`
    query {
      projectsData: site {
        ...Projects
      }
    }
  `)

  return (
    <PageContainer>
      <ThemeProvider theme={themes.dark}>
        <Project
          projectName={projectName}
          projectData={projectsData.siteMetadata.projects}
          transitionState={transitionState}
          canPerformIntro={firstEntrance}
          introTrigger={!loaderVisible}
        >
          {children}
        </Project>
      </ThemeProvider>
    </PageContainer>
  )
})

const ConnectedProjectContainer = connect(mapStateToProps)(ProjectContainer)

export default ConnectedProjectContainer
