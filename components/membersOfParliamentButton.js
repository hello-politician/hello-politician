import React from 'react'


export default class MembersOfParliamentButton extends React.Component {

  MEMBERS_OF_PARLIAMENT_JSON_ADDRESS =  "https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json";

  CORS_FETCH_SETTINGS = {
    method: 'GET',
    mode: 'cors', 
    headers: 
      { 
        'Content-Type': 'application/json'
      }
  }

  constructor() {
    super()
    this.retrieveMembersOfParliament = this.retrieveMembersOfParliament.bind(this)
  }

  retrieveMembersOfParliament() {
    fetch(this.MEMBERS_OF_PARLIAMENT_JSON_ADDRESS, this.CORS_FETCH_SETTINGS
      )
    .then(rawResponse => rawResponse.json()) // Convert to JSON Object
    .then(response => alert(JSON.stringify(response))) // Display JSON as a string
    .catch(error => alert('Failed to load data:', error))
  }
  
  render() {
    return (
        <button variant='primary' onClick={this.retrieveMembersOfParliament}>Show me Parliament!</button>
      )
  }
}
