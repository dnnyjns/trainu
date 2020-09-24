import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import { transparentize } from "polished"
import styled from "styled-components"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt"
import { openPopupWidget } from "react-calendly"
import Icon from "~/components/Icon"
import { Trainer } from "~/data/trainers"

const ImageWrapper = styled.div`
  cursor: pointer;
  padding-bottom: 66.666667%;
  position: relative;
`

const Overlay = styled.div`
  background-color: ${props => transparentize(0.5, props.theme.colors.black)};
  border-radius: ${props => props.theme.border.radiusLg};
  color: ${props => props.theme.colors.primary400};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled(GatsbyImage)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.border.radiusLg};
  box-shadow: ${props => props.theme.border.boxShadowLg};
  position: absolute !important;
  height: 100%;
  width: 100%;
`

const Info = styled.div`
  font-size: ${props => props.theme.font.size18};
  font-weight: ${props => props.theme.font.weightMedium};
  line-height: ${props => props.theme.font.leading6};
  margin-bottom: ${props => props.theme.spacing2};
  margin-top: ${props => props.theme.spacing2};
`

const Description = styled.p`
  color: ${props => props.theme.colors.primary400};
`

const TrainerComponent: React.FC<Trainer> = ({
  calendly,
  description,
  name,
  image,
}) => {
  const data = useStaticQuery<GatsbyTypes.TrainerPhotosQuery>(graphql`
    query TrainerPhotos {
      photos: allFile(filter: { absolutePath: { regex: "/trainer-/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const [hover, setHover] = useState(false)
  const onClick = () =>
    openPopupWidget({
      url: calendly,
    })
  const photo = data.photos.edges.find(p =>
    p.node.childImageSharp?.fluid?.originalName?.includes(image)
  )?.node.childImageSharp?.fluid
  return (
    <li>
      <ImageWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <Img fluid={photo} />
        {hover && (
          <Overlay>
            <Icon icon={faCalendarAlt} size="5x" />
          </Overlay>
        )}
      </ImageWrapper>
      <Info>
        <h4>{name}</h4>
        <Description>{description}</Description>
      </Info>
    </li>
  )
}

export default TrainerComponent
