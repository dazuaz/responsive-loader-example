import React, { useCallback, useState } from "react"
import "intersection-observer"
import { useInView } from "react-intersection-observer"

const isSsr = typeof window === "undefined"
const universalBtoa = isSsr
  ? (str) => Buffer.from(str.toString(), "binary").toString("base64")
  : window.btoa

const isIntersectionObserverAvailable = isSsr
  ? false
  : !!window.IntersectionObserver

const imageAddStrategy = ({ lazyLoad, inView, loaded }) => {
  if (!lazyLoad) {
    return true
  }

  if (isSsr) {
    return false
  }

  if (isIntersectionObserverAvailable) {
    return inView || loaded
  }

  return true
}

const imageShowStrategy = ({ lazyLoad, loaded }) => {
  if (!lazyLoad) {
    return true
  }

  if (isSsr) {
    return false
  }

  if (isIntersectionObserverAvailable) {
    return loaded
  }

  return true
}

export const Image = function ({
  className,
  fadeInDuration,
  intersectionTreshold,
  intersectionMargin,
  pictureClassName,
  lazyLoad = true,
  style,
  pictureStyle,
  explicitWidth,
  data,
}) {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  const [ref, inView, _entry] = useInView({
    threshold: intersectionTreshold || 0,
    rootMargin: intersectionMargin || "0px 0px 0px 0px",
    triggerOnce: true,
  })

  const absolutePositioning = {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  }

  const addImage = imageAddStrategy({
    lazyLoad,
    inView,
    loaded,
  })
  const showImage = imageShowStrategy({
    lazyLoad,
    inView,
    loaded,
  })

  const webpSource = data.webpSrcSet && (
    <source srcSet={data.webpSrcSet} sizes={data.sizes} type='image/webp' />
  )

  const regularSource = data.srcSet && (
    <source srcSet={data.srcSet} sizes={data.sizes} />
  )

  const placeholder = (
    <div
      style={{
        backgroundImage: data.base64 ? `url(${data.base64})` : null,
        backgroundColor: data.bgColor,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        opacity: showImage ? 0 : 1,
        transition:
          !fadeInDuration || fadeInDuration > 0
            ? `opacity ${fadeInDuration || 500}ms ${fadeInDuration || 500}ms`
            : null,
        ...absolutePositioning,
      }}
    />
  )

  const { width, aspectRatio } = data
  const height = data.height || width / aspectRatio

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"></svg>`

  const sizer = (
    <img
      className={pictureClassName}
      style={{
        display: "block",
        width: explicitWidth ? `${width}px` : "100%",
        ...pictureStyle,
      }}
      src={`data:image/svg+xml;base64,${universalBtoa(svg)}`}
      role='presentation'
    />
  )

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: explicitWidth ? "inline-block" : "block",
        overflow: "hidden",
        ...style,
        position: "relative",
      }}>
      {sizer}
      {placeholder}
      {addImage && (
        <picture
          style={{
            ...absolutePositioning,
            display: "flex",
            alignItems: "center",
            opacity: showImage ? 1 : 0,
            transition:
              !fadeInDuration || fadeInDuration > 0
                ? `opacity ${fadeInDuration || 500}ms`
                : null,
          }}>
          {webpSource}
          {regularSource}
          {data.src && (
            <img
              src={data.src}
              alt={data.alt}
              title={data.title}
              onLoad={handleLoad}
              style={{ width: "100%" }}
            />
          )}
        </picture>
      )}
      <noscript>
        <picture className={pictureClassName} style={{ ...pictureStyle }}>
          {webpSource}
          {regularSource}
          {data.src && <img src={data.src} alt={data.alt} title={data.title} />}
        </picture>
      </noscript>
    </div>
  )
}
