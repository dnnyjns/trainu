import colors from "~/style/colors"

const border = {
  color: colors.neutral100,
  boxShadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  boxShadowMd:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  boxShadowLg:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  boxShadowXl:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  boxShadow2xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  boxShadowInner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  boxShadowOutline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  radiusSm: "0.125rem",
  radius: "0.25rem",
  radiusMd: "0.375rem",
  radiusLg: "0.5rem",
  radiusFull: "9999px",
}

export default border
