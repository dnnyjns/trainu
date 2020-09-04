import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/SEO"
import Trainers from "../components/Trainers"
import media, { breakpoints } from "~/style/media"

const BG = styled(BackgroundImage)`
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  display: inline-block;
  padding-bottom: ${props => props.theme.spacing32};
  height: 100%;
  width: 100%;

  &::before,
  &::after {
    filter: brightness(50%);
  }
`

const Body = styled.div`
  color: ${props => props.theme.colors.neutral050};
  font-size: ${props => props.theme.font.size36};
  font-weight: ${props => props.theme.font.weightBold};
  line-height: ${props => props.theme.font.leadingTight};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => props.theme.spacing12};
  padding-left: ${props => props.theme.spacing6};
  padding-right: ${props => props.theme.spacing6};
  max-width: 1024px;
  text-align: center;
  -webkit-text-stroke: 1px ${props => props.theme.colors.neutral800};

  ${props => media.lessThan("medium")`
    font-size: ${props.theme.font.size20};
  `}
`

const TrainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${props => props.theme.spacing20};
  max-width: ${breakpoints.large};

  ${props => media.greaterThan("large")`
    padding-left: ${props.theme.spacing6};
    padding-right: ${props.theme.spacing6};
  `}
`

const IndexPage = () => {
  const data = useStaticQuery<GatsbyTypes.HomePageHeroQuery>(graphql`
    query HomePageHero {
      placeholderImage: file(relativePath: { eq: "workout.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <BG fluid={data.placeholderImage?.childImageSharp?.fluid}>
        <Body>
          We've made it easier than ever to schedule training sessions with your
          favorite trainer! Get started by selecting a trainer from below!
        </Body>
        <TrainerWrapper>
          <Trainers />
        </TrainerWrapper>
      </BG>
    </>
  )
}

export default IndexPage
