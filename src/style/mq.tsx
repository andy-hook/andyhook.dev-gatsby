import { generateMedia, pxToEm } from "styled-media-query"

const mq = generateMedia(
  pxToEm({
    "max-thumb": "479px",
    "min-thumb": "480px",

    "max-palm": "599px",
    "min-palm": "600px",

    "max-lap": "899px",
    "min-lap": "900px",

    "max-desk": "1199px",
    "min-desk": "1200px",

    "max-wide": "1499px",
    "min-wide": "1500px",

    "max-wall": "1799px",
    "min-wall": "1800px",
  })
)

export default mq
