import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import styled, { css } from "styled-components"

export interface LinkProps extends GatsbyLinkProps<any> {
  fullWidth?: boolean
  inverse?: boolean
  unstyled?: boolean
}

const Link = styled(GatsbyLink)<LinkProps>`
  color: ${props => {
    if (props.inverse) {
      return props.theme.colors.primary400
    } else {
      return "inherit"
    }
  }};
  outline: none;
  text-decoration: none;

  &:active {
    outline: 0;
  }
  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    ${props =>
      !props.unstyled &&
      css`
        color: ${props.inverse
          ? props.theme.colors.primary900
          : props.theme.colors.primary400};
      `}
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`

export default Link
