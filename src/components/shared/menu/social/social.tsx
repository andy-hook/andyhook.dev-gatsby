import React, { memo, MutableRefObject } from "react"
import { SocialMeta } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Icon from "@components/shared/icon/icon"
import * as S from "./social.style"
import gsap from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"

interface Props {
  items: SocialMeta
  open: boolean
}

type refArray<T> = Array<MutableRefObject<T>>

const Social: React.FunctionComponent<Props> = memo(({ items, open }) => {
  const projectKeys = keys(items)
  const refs = projectKeys.map(React.createRef) as refArray<HTMLLIElement>
  const cachedRefs = React.useRef<refArray<HTMLLIElement>>(refs)
  const listRef = React.useRef() as MutableRefObject<HTMLUListElement>

  const animateOpen = () => {
    gsap.fromTo(
      listRef.current,
      1,
      {
        y: `${150}%`,
      },
      {
        ease: "expo.out",
        delay: 0.4,
        y: "0%",
        clearProps: "transform",
      }
    )

    cachedRefs.current.map((listItem, index) => {
      gsap.fromTo(
        listItem.current,
        1,
        {
          y: `${20 + index * 10}%`,
          opacity: 0,
        },
        {
          ease: "expo.out",
          delay: 0.4 + index * 0.025,
          opacity: 1,
          y: "0%",
          clearProps: "transform",
        }
      )
    })
  }

  const animateClosed = () => {
    cachedRefs.current.map(listItem => {
      gsap.to(listItem.current, 0.25, {
        opacity: 0,
        clearProps: "opacity",
      })
    })
  }

  useDeferredRunEffect(() => {
    open ? animateOpen() : animateClosed()
  }, [open])

  const icons = keys(items).map((key, index) => {
    const ref = cachedRefs.current[index]

    return (
      <S.SocialItem key={key} ref={ref}>
        <S.Link
          aria-label={items[key].label}
          target={items[key].url.includes("mailto:") ? "" : "_blank"}
          href={items[key].url}
        >
          <S.IconPos>
            <Icon name={items[key].icon} />
          </S.IconPos>
        </S.Link>
      </S.SocialItem>
    )
  })

  return <S.SocialList ref={listRef}>{icons}</S.SocialList>
})

export default Social
