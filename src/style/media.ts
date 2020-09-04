import { css } from "styled-components"

export type FixedBreakpoint = "huge" | "large" | "medium" | "small"

export const breakpointsNum: Record<FixedBreakpoint, number> = {
  huge: 1440,
  large: 1170,
  medium: 768,
  small: 575,
}

export const breakpoints: Record<FixedBreakpoint, string> = {
  huge: `${breakpointsNum.huge}px`,
  large: `${breakpointsNum.large}px`,
  medium: `${breakpointsNum.medium}px`,
  small: `${breakpointsNum.small}px`,
}

type Breakpoint = FixedBreakpoint | number

function getSizeFromBreakpoint(breakpointValue: Breakpoint) {
  if (typeof breakpointValue === "string" && breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  }

  return `${breakpointValue}px`
}

const lessThan = (breakpoint: Breakpoint) => (
  first: any,
  ...args: Array<any>
) => css`
  @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
    ${css(first, ...args)}
  }
`

const greaterThan = (breakpoint: Breakpoint) => (
  first: any,
  ...args: Array<any>
) => css`
  @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
    ${css(first, ...args)}
  }
`

const between = (firstBreakpoint: Breakpoint, secondBreakpoint: Breakpoint) => (
  first: any,
  ...args: Array<any>
) => css`
  @media (min-width: ${getSizeFromBreakpoint(
      firstBreakpoint
    )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint)}) {
    ${css(first, ...args)}
  }
`

export default {
  lessThan,
  greaterThan,
  between,
}
