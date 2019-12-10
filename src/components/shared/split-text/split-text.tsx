import React, { memo, MutableRefObject, useEffect, useCallback } from "react"
import * as S from "./split-text.style"
import gsap from "gsap"

interface Props {
  children: string
  visible: boolean
}

type refArray<T> = Array<MutableRefObject<T>>

const SplitText: React.FunctionComponent<Props> = memo(
  ({ children, visible }) => {
    const text = children
    const wordArray = text.split(" ")
    const letters = wordArray.join("")
    let refPos = 0

    const refs = letters.split("").map(React.createRef) as refArray<
      HTMLDivElement
    >
    const cachedRefs = React.useRef<refArray<HTMLDivElement>>(refs)

    const splitTextNodes = () =>
      wordArray.map((word, wordIndex) => {
        const charactersArray = word.split("")

        const renderLetters = charactersArray.map((letter, letterIndex) => {
          const ref = cachedRefs.current[refPos]
          refPos++

          return (
            <S.TitleWord key={letterIndex} ref={ref}>
              {letter}
            </S.TitleWord>
          )
        })

        return (
          <S.TitleWord key={wordIndex}>
            {renderLetters}
            {wordIndex !== wordArray.length - 1 ? " " : ""}
          </S.TitleWord>
        )
      })

    const useSplitTextNodes = useCallback(splitTextNodes, [])

    const animateShow = () => {
      cachedRefs.current.map((listItem, index) => {
        gsap.fromTo(
          listItem.current,
          {
            opacity: 0,
            y: `0.5em`,
          },
          {
            duration: 2,
            ease: "expo.out",
            delay: index * 0.01,
            y: "0em",
            opacity: 1,
            clearProps: "transform",
            overwrite: true,
          }
        )
      })
    }

    useEffect(() => {
      if (visible) {
        animateShow()
      }
    }, [visible])

    return <>{useSplitTextNodes()}</>
  }
)

export default SplitText
