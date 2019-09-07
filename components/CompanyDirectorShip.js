import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  background-color: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
  margin: 30px 0;
`

export default class CompanyDirectoryShip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        const response = await fetch('https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json')
        const data = await response.json()
        const { id } = this.props.parent.url.query
        // console.log(this.props.parent.url)
        const mp_data = data[id]
        this.setState({ data: mp_data })
    }

    render() {
        return (
            <Card>
                <p>SHit</p>
            </Card>
        )
    }
}