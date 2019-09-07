import React from 'react'
import styled from 'styled-components'

const ContentCard = styled.div`
  background: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 1rem;
`
const CardHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.53px;
  margin-bottom: 1rem;
`
const StatContainer = styled.div`
  margin-top: 1.5rem;
`

const StatIcon = styled.img`
  height: 2rem;
  width: 2rem;
  float: left;
  margin-right: 0.5rem;
`
const ItemLink = styled.a`
  font-weight: 700;
  font-size: 1rem;
  display: block;
  color: #ded7ff;
  margin-bottom: 1rem;
`
export class AvailableData extends React.Component {
    

    render() {

        return (
            <ContentCard>

            </ContentCard>
        )
    }
}