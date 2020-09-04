import border from "./border";
import colors from "./colors";

const inputs = {
  bg: colors.white,
  borderClr: colors.neutral100,
  borderRadius: border.radius,
  borderWidth: "1px",
  clr: colors.neutral900,
  clrPlaceholder: colors.neutral300,
  focusBg: colors.white,
  focusBorderClr: colors.primary400,
  focusBorderWidth: "1px",
  focusBoxShadow: `0 0 0 1px ${colors.primary400}`,
  focusOutline: 0,
  focusTransition: "all 100ms",
  fontWeight: 400,
  height: "40px",
  lineHeight: 1.5,
  transition: "order-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s"
};

export default inputs;
