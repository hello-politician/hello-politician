import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class ProfileHeading extends React.Component {
  render() {
    return (
      <Media>
        <img
          width={150}
          height={150}
          src="https://via.placeholder.com/150"
          alt="Generic Placeholder"
        />
        <Media.Body>
          <h4>This is a name, soon to be dynamic</h4>
          <h5>This is a electorate, soon to be dynamic</h5>
          <h5>This is a tenure, soon to be dynamic</h5>
          <h5>This is a party, soon to be dynamic</h5>
        </Media.Body>
      </Media>
    );
  }
}
export default ProfileHeading;