import React from "react"
import styled, { css } from "styled-components"
import Icon, { IconProps } from "~/components/Icon"

type ButtonSize = "1" | "2" | "3" | "4" | "5"

const Span = styled.span`
  border-radius: ${props => props.theme.border.radiusMd};
  box-shadow: ${props => props.theme.border.boxShadowSm};
  display: inline-flex;
`

const StyledButton = styled.button<{ disabled: boolean; size: ButtonSize }>`
  background-color: ${props => props.theme.colors.primary600};
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-weight: ${props => props.theme.font.weightMedium};
  transition-duration: 150ms;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  align-items: center;
  display: inline-flex;

  ${({ size, theme }) => {
    const fontSize: Record<ButtonSize, string> = {
      "1": theme.font.size12,
      "2": theme.font.size14,
      "3": theme.font.size14,
      "4": theme.font.size16,
      "5": theme.font.size16,
    }
    const leading: Record<ButtonSize, string> = {
      "1": theme.font.leading4,
      "2": theme.font.leading4,
      "3": theme.font.leading5,
      "4": theme.font.leading6,
      "5": theme.font.leading6,
    }
    const padding: Record<ButtonSize, { x: string; y: string }> = {
      "1": { x: theme.spacing2, y: theme.spacing1 },
      "2": { x: theme.spacing3, y: theme.spacing1 },
      "3": { x: theme.spacing3, y: theme.spacing2 },
      "4": { x: theme.spacing4, y: theme.spacing2 },
      "5": { x: theme.spacing4, y: theme.spacing3 },
    }
    const radius: Record<ButtonSize, string> = {
      "1": theme.border.radiusSm,
      "2": theme.border.radiusMd,
      "3": theme.border.radiusMd,
      "4": theme.border.radiusMd,
      "5": theme.border.radiusMd,
    }
    const p = padding[size]
    return css`
      border-radius: ${radius[size]};
      line-height: ${leading[size]};
      font-size: ${fontSize[size]};
      padding: ${p.y} ${p.x};
    `
  }}

  ${props =>
    !props.disabled &&
    css`
      &:hover {
        background-color: ${props => props.theme.colors.primary500};
      }

      &:focus {
        border-color: ${props => props.theme.colors.primary700};
        box-shadow: ${props => props.theme.border.boxShadowOutline};
        outline: none;
      }

      &:active {
        background-color: ${props => props.theme.colors.primary700};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.colors.primary300};
      cursor: not-allowed;
    `}
`

const StyledIcon = styled(Icon)<{
  buttonSize: ButtonSize
  hasNeighbor: boolean
}>`
  ${({ buttonSize, hasNeighbor, theme }) => {
    const fontSize: Record<ButtonSize, string> = {
      "1": theme.font.size18,
      "2": theme.font.size20,
      "3": theme.font.size20,
      "4": theme.font.size24,
      "5": theme.font.size24,
    }
    const marginRight: Record<ButtonSize, string> = {
      "1": theme.spacing1,
      "2": theme.spacing2,
      "3": theme.spacing2,
      "4": theme.spacing3,
      "5": theme.spacing3,
    }
    return css`
      font-size: ${fontSize[buttonSize]};
      margin-right: ${hasNeighbor ? marginRight[buttonSize] : 0};
    `
  }}
`

interface ButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  icon?: IconProps["icon"]
  onClick?: () => void
  size?: ButtonSize
  type?: "button" | "submit" | "reset"
}
const Button = ({
  children,
  disabled,
  icon,
  onClick,
  size = "3",
  type = "button",
}: ButtonProps) => {
  return (
    <Span>
      <StyledButton
        disabled={Boolean(disabled)}
        onClick={disabled ? undefined : onClick}
        size={size}
        type={type}
      >
        {icon && (
          <StyledIcon
            buttonSize={size}
            hasNeighbor={Boolean(children)}
            icon={icon}
          />
        )}
        {children}
      </StyledButton>
    </Span>
  )
}

export default Button
