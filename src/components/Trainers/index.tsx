import React from "react"
import styled from "styled-components"
import media from "~/style/media"
import TrainerPhoto from "./TrainerPhoto"

const Root = styled.div`
  background-color: ${props => props.theme.colors.neutral050};
  border: 1px solid ${props => props.theme.border.color};
  padding: ${props => props.theme.spacing4} ${props => props.theme.spacing8};

  ${props => media.greaterThan("large")`
    border-radius: ${props.theme.border.radiusLg};
  `}
`

const TrainerHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing5};
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
      <TrainerHeader>
        <TrainerTitle>Our Team</TrainerTitle>
        <TrainerSubtitle>
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </TrainerSubtitle>
      </TrainerHeader>
      <Photos>
        <TrainerPhoto
          name="Lindsay Walton"
          title="Cardio"
          url="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        />
        <TrainerPhoto
          name="Courtney Henry"
          title="Swimming"
          url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        />
        <TrainerPhoto
          name="Tom Cook"
          title="Weight Training"
          url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        />
        <TrainerPhoto
          name="Whitney Francis"
          title="General Fitness"
          url="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        />
        <TrainerPhoto
          name="Leonard Krasner"
          title="Yoga"
          url="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        />
        <TrainerPhoto
          name="Floyd Miles"
          title="Weight Training"
          url="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        />
      </Photos>
    </Root>
  )
}

export default Trainers
