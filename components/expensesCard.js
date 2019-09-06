import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ExpensesCard extends React.Component {
  render() {
    return (
      <Card id="expenses-card">
        <Card.Body>
          <Card.Title>Expenses Data</Card.Title>
          <Card.Subtitle>Accomodation</Card.Subtitle>
          <Card.Text>Data about accomodation</Card.Text>
          <Card.Subtitle>Travel</Card.Subtitle>
          <Card.Text>Data about travel</Card.Text>
          <Card.Subtitle>Total</Card.Subtitle>
          <Card.Text>Data about total</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ExpensesCard;