import React from "react";
import styled from "styled-components";

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);
  background-color: #79bbff;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  &:hover {
    background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);
    background-color: #378de5;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export default class MembersOfParliamentButton extends React.Component {
  MEMBERS_OF_PARLIAMENT_JSON_ADDRESS =
    "https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json";

  CORS_FETCH_SETTINGS = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };

  constructor() {
    super();
    this.retrieveMembersOfParliament = this.retrieveMembersOfParliament.bind(
      this
    );
  }

  retrieveMembersOfParliament() {
    fetch(this.MEMBERS_OF_PARLIAMENT_JSON_ADDRESS, this.CORS_FETCH_SETTINGS)
      .then(rawResponse => rawResponse.json()) // Convert to JSON Object
      .then(response => alert(JSON.stringify(response))) // Display JSON as a string
      .catch(error => alert("Failed to load data:", error));
  }

  render() {
    return (
      <Button onClick={this.retrieveMembersOfParliament}>
        Show me Parliament!
      </Button>
    );
  }
}
