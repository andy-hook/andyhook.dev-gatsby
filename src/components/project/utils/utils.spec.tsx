import { getCurrentProjectData, getNextProjectData } from "./utils"
import { projectsData } from "@mock-data"

const projectKeys = Object.keys(projectsData)

describe("getCurrentProjectData", () => {
  test("Should return specified project", () => {
    const projectKey = "sketchbook"

    const out = getCurrentProjectData(projectsData, projectKey)

    expect(out).toMatchObject(projectsData[projectKey])
  })
})

describe("getNextProjectData", () => {
  test("Should return the next project", () => {
    const projectKey = "brandwatch"

    const nextPos = projectKeys.indexOf(projectKey) + 1

    const out = getNextProjectData(projectsData, projectKey)

    expect(out).toMatchObject(projectsData[projectKeys[nextPos]])
  })

  test("Should return the first project when the end of the list is reached", () => {
    const firstProject = projectsData[projectKeys[0]]

    const projectKey = "sketchbook"

    const out = getNextProjectData(projectsData, projectKey)

    expect(out).toMatchObject(firstProject)
  })
})
