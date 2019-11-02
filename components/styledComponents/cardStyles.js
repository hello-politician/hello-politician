import styled from 'styled-components'

export const StatIcon = styled.img`
  height: 2rem;
  width: 2rem;
  float: left;
  margin-right: 0.5rem;
`

export const StatSubtitle = styled.div`
  margin-top: 0.2rem;
  color: #ffffff;
`

export const InfoCard = styled.div`
  background: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 8rem;
@media only screen and (max-width: 1280px) {
max-width: calc(100vw - 1rem);
}

`
export const CardHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.53px;
  margin-bottom: 1rem;
`
export const StatContainer = styled.div`
  margin-top: 1.5rem;
`
export const StatHeading = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.33px;
  line-height: 16px;
  margin-top: 0.5rem;
`