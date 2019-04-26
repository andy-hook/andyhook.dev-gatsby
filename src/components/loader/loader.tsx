import React from "react"

interface Props {
  visible?: boolean
}

const Loader: React.FunctionComponent<Props> = ({ visible = true }) => {
  const element = visible ? (
    <div style={{ backgroundColor: "green" }}>Visible</div>
  ) : (
    <div style={{ backgroundColor: "red" }}>Hidden</div>
  )

  return <div>{element}</div>
}

export default Loader
