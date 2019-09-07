import React from 'react'
import {InfoCard, CardHeading, StatSubtitle, StatContainer, StatHeading, StatIcon} from './styledComponents/cardStyles'
import { Table } from 'evergreen-ui'

export default class PecuniaryCard extends React.Component {
  render() {
    return (
      <InfoCard>
      <CardHeading>
        {this.props.heading}
      </CardHeading>
      {
        this.props.pecuniaryData.map((value, index) => {
          return (<StatContainer>
          <StatIcon src={this.props.imgSrc} />
          <StatSubtitle>{value}</StatSubtitle>
        </StatContainer>)
        })
      }
      
    </InfoCard>)
  }
}