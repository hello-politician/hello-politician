import React from 'react'
import {InfoCard, CardHeading} from './styledComponents/cardStyles'
import { Table } from 'evergreen-ui'

export default class CampaignDonationsCard extends React.Component {
  render() {
    return (
    <InfoCard>
      <CardHeading>{this.props.heading}</CardHeading>
      <Table.Body>
        <Table.Head>
          <Table.TextCell flexBasis={240} flexGrow={0}>
            <strong>Item</strong>
          </Table.TextCell>
          <Table.TextCell rightView>
            <strong>Cost</strong>
          </Table.TextCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.TextCell flexBasis={240} flexGrow={0}>
              Total donations
            </Table.TextCell >
            <Table.TextCell rightView>{this.props.totalDonations}</Table.TextCell>
          </Table.Row>
          <Table.Row>
            <Table.TextCell flexBasis={240} flexGrow={0}>
              Total expenses
            </Table.TextCell >
            <Table.TextCell rightView>{this.props.totalExpenses}</Table.TextCell>
          </Table.Row>
        </Table.Body>
      </Table.Body>
    </InfoCard>)
  }
}