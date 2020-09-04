import React from "react"
import styled from "styled-components"
import { faRunning } from "@fortawesome/free-solid-svg-icons"
import Icon from "~/components/Icon"
import Link from "~/components/Link"
import media from "~/style/media"

const Root = styled.header`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.border.boxShadow};
  position: relative;
  z-index: 1;
`

const Nav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: ${props => props.theme.spacing4};
  padding-right: ${props => props.theme.spacing4};

  ${props => media.greaterThan("medium")`
    padding-left: ${props.theme.spacing6};
    padding-right: ${props.theme.spacing6};
  `}
`

const NavContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacing4};
  padding-bottom: ${props => props.theme.spacing4};
`

const LogoLink = styled(Link)`
  color: ${props => props.theme.colors.primary500};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-size: ${props => props.theme.font.size30};
  font-weight: ${props => props.theme.font.weightBold};
  margin-left: ${props => props.theme.spacing4};
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.neutral400};
  font-size: ${props => props.theme.font.size20};
  font-weight: ${props => props.theme.font.weightMedium};
  padding-left: ${props => props.theme.spacing6};
`

interface HeaderProps {
  siteTitle?: string
}
const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
  <Root>
    <Nav>
      <NavContent>
        <LogoLink to="/" unstyled>
          <span>
            <Icon icon={faRunning} size="3x" />
          </span>
          <Title>{siteTitle}</Title>
        </LogoLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavContent>
    </Nav>
  </Root>
)

export default Header
