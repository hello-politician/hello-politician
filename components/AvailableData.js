import React, { useEffect, useState } from 'react'
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

export const dataCategory = [ 'Company directorships and controlling interests', 
  'Other companies and business entities',
  'Employment',
  'Beneficial interests in, and trusteeships of, trusts',
  'Organisations and trusts seeking Government funding',
  'Real property',
  'Superannuation schemes',
  'Investment schemes',
  'Debtors',
  'Creditors',
  'Overseas travel costs',
  'Gifts',
  'Discharged debts',
  'Payments for activities']

const listItem = (data) => {
  return Object.keys(data).map((key,index) => {
    return dataCategory.includes(key) && (
      <StatContainer>
        <StatIcon src='http://lorempixel.com/32/32/technics/' />
        <ItemLink href='#'>{key}</ItemLink>
      </StatContainer>
    )    
  })
}
export function AvailableData(props) {
  const [MPInfo, setMPInfo] = useState({})
  useEffect(() => {
      setMPInfo(props.currentMPData)
  })
  const item  = listItem(MPInfo)
  return (
      <ContentCard>
          <CardHeading>Available Data</CardHeading>
          {item }
      </ContentCard>
  )
}