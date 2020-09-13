import React from "react"
import styled from "styled-components"
import media from "~/style/media"
import Trainer from "./Trainer"
import trainers from "~/data/trainers"

const Root = styled.div`
  background-color: ${props => props.theme.colors.neutral050};
  border: 1px solid ${props => props.theme.border.color};
  padding: ${props => props.theme.spacing4} ${props => props.theme.spacing8};

  ${props => media.greaterThan("large")`
    border-radius: ${props.theme.border.radiusLg};
  `}
`

const TrainerTitle = styled.h2`
  color: ${props => props.theme.font.clrDarkPrimary};
  font-size: ${props => props.theme.font.size36};
  font-weight: ${props => props.theme.font.weightBold};
  margin-top: 0;
  margin-bottom: 0;
`
const TrainerSubtitle = styled.p`
  color: ${props => props.theme.colors.neutral500};
  font-size: ${props => props.theme.font.size18};
`

const Photos = styled.ul`
  padding-bottom: ${props => props.theme.spacing12};
  padding-top: ${props => props.theme.spacing12};

  ${props => media.greaterThan("small")`
    display: grid;
    grid-column-gap: ${props.theme.spacing6};
    grid-row-gap: ${props.theme.spacing8};
    grid-template-columns: repeat(2,minmax(0,1fr));
  `}

  ${props => media.greaterThan("large")`
    grid-column-gap: ${props.theme.spacing8};
    grid-template-columns: repeat(3,minmax(0,1fr));
  `}
`

const Trainers: React.FC = () => {
  return (
    <Root>
      <div>
        <TrainerTitle>Trainers</TrainerTitle>
        <TrainerSubtitle>Kansas City, MO</TrainerSubtitle>
      </div>
      <Photos>
        {trainers.map(trainer => (
          <Trainer key={trainer.name} {...trainer} />
        ))}
      </Photos>
    </Root>
  )
}

export default Trainers
