import { useCallback, useRef } from 'react'
import throttle from 'lodash.throttle'

//реализация бесконечной прокрутки была заимствована: https://ru.stackoverflow.com/questions/1105947/

interface ILoadingProps {
  onIntersection: () => void
  delay: number
  marginFromBottom?: number
}

export function useLazyLoading({
  onIntersection,
  delay = 1000,
  marginFromBottom = 10,
}: ILoadingProps) {
  const containerRef = useRef(null) as any
  const onScroll = useCallback(
    throttle(() => {
      const containerScrollTop = containerRef.current.scrollTop
      const containerHeight = containerRef.current.clientHeight
      const scrollHeight = containerRef.current.scrollHeight
      if (scrollHeight - containerScrollTop - containerHeight - marginFromBottom <= 0) {
        onIntersection()
      }
    }, delay),
    [onIntersection, containerRef, marginFromBottom, delay]
  )

  return [onScroll, containerRef]
}
