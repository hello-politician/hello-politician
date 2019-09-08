import React from 'react'
import { InfoCard, CardHeading } from './styledComponents/cardStyles'
import { Table } from 'evergreen-ui'

export default class CampaignDonationsCard extends React.Component {
  render() {
    return (
      <InfoCard>
        <CardHeading>{this.props.heading}</CardHeading>
        <Table.Body>
          <Table.Head>
            <Table.TextCell flexBasis={240} flexGrow={0}>
              <strong><p style={{ fontSize: '1.2rem', color: 'white' }}>Item</p></strong>
            </Table.TextCell>
            <Table.TextCell rightView>
              <strong><p style={{ fontSize: '1.2rem', color: 'white' }}>Cost</p></strong>
            </Table.TextCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.TextCell flexBasis={240} flexGrow={0}>
                <p style={{ fontSize: '1rem', color: 'white' }}>Total donations</p>
              </Table.TextCell>
              <Table.TextCell rightView><p style={{ fontSize: '1rem', color: 'white' }}>{this.props.totalDonations}</p></Table.TextCell>
            </Table.Row>
            <Table.Row>
              <Table.TextCell flexBasis={240} flexGrow={0}>
                <p style={{ fontSize: '1rem', color: 'white' }}>Total expenses</p>
              </Table.TextCell>
              <Table.TextCell rightView><p style={{ fontSize: '1rem', color: 'white' }}>{this.props.totalExpenses}</p></Table.TextCell>
            </Table.Row>
          </Table.Body>
        </Table.Body>
      </InfoCard>)
  }
}