import React, { useState } from "react"
import { transparentize } from "polished"
import styled from "styled-components"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt"
import { openPopupWidget } from "react-calendly"
import Icon from "~/components/Icon"
import colors from "~/style/colors"

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

const Image = styled.img`
  border-radius: ${props => props.theme.border.radiusLg};
  box-shadow: ${props => props.theme.border.boxShadowLg};
  object-fit: cover;
  position: absolute;
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

const Title = styled.p`
  color: ${props => props.theme.colors.primary400};
`

interface TrainerPhotoProps {
  name: string
  title: string
  url: string
}
const TrainerPhoto: React.FC<TrainerPhotoProps> = ({ name, title, url }) => {
  const [hover, setHover] = useState(false)
  const onClick = () =>
    openPopupWidget({
      url: "https://calendly.com/trainer-u",
    })

  return (
    <li>
      <ImageWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <Image src={url} />
        {hover && (
          <Overlay>
            <Icon icon={faCalendarAlt} size="5x" />
          </Overlay>
        )}
      </ImageWrapper>
      <Info>
        <h4>{name}</h4>
        <Title>{title}</Title>
      </Info>
    </li>
  )
}

export default TrainerPhoto
