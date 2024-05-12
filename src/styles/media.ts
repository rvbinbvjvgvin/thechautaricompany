export const mobileBreakpoint = 500
export const mobileDesignSize = 375

export const tabletBreakpoint = 1024
export const tabletDesignSize = 1024

export const desktopBreakpoint = 1440
export const desktopDesignSize = 1440

const media = {
  // standard media queries
  mobile: `@media screen and (max-width: ${mobileBreakpoint}px)`,
  tablet: `@media screen and (min-width: ${
    mobileBreakpoint + 1
  }px) and (max-width: ${tabletBreakpoint}px)`,
  extendedTablet: `@media screen and (min-width: ${
    mobileBreakpoint + 1
  }px) and (max-width: 1100px)`,
  desktop: `@media screen and (min-width: ${
    tabletBreakpoint + 1
  }px) and (max-width: ${desktopBreakpoint}px)`,
  largeFullWidth: `@media screen and (min-width: 1650px)`,
  fullWidth: `@media screen and (min-width: ${desktopBreakpoint + 1}px)`,

  // raw versions for for use in gsap.matchMedia
  gsap: {
    mobile: `(max-width: ${mobileBreakpoint}px)`,
    tablet: `(min-width: ${
      mobileBreakpoint + 1
    }px) and (max-width: ${tabletBreakpoint}px)`,
    desktop: `(min-width: ${
      tabletBreakpoint + 1
    }px) and (max-width: ${desktopBreakpoint}px)`,
    fullWidth: `(min-width: ${desktopBreakpoint + 1}px)`,
  },

  // hover queries for use in styled components
  hover: "@media (hover: hover) ",
  noHover: "@media (hover: none) ",
} as const

export default media

export const getBreakpoint = () => {
  if (typeof window === "undefined") return "mobile"

  const { innerWidth } = window

  if (innerWidth <= mobileBreakpoint) return "mobile"
  if (innerWidth <= tabletBreakpoint) return "tablet"
  if (innerWidth <= desktopBreakpoint) return "desktop"
  return "fullWidth"
}
