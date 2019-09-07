import React from 'react'
import MPList from './MPList'
export default class PopulatedMPList extends React.Component {
  MEMBERS_OF_PARLIAMENT_JSON_ADDRESS =  "https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json";

  CORS_FETCH_SETTINGS = {
    method: 'GET',
    mode: 'cors', 
    headers: { 'Content-Type': 'application/json' }
  }

  constructor() {
    super()
    this.retrieveMembersOfParliament = this.retrieveMembersOfParliament.bind(this)
    this.state = {
      mpList: [{}]
    }
  }

  componentDidMount() {
    this.retrieveMembersOfParliament().then(res => {
      this.setState({...this.state, mpList: res})
    })
  }

  async retrieveMembersOfParliament() {
    let rawResponse = await fetch(this.MEMBERS_OF_PARLIAMENT_JSON_ADDRESS, this.CORS_FETCH_SETTINGS)
    let response = await rawResponse.json()
    return response
  }

  render() {
    return (<MPList mpList={this.state.mpList}></MPList>)
  }
}