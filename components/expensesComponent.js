import React, { Component } from 'react';

class ExpensesComponent extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td>Accomodation</td>
          {/* <td>{AccomodationCost}</td> */}
        </tr>
        <tr>
          <td>Travel</td>
          {/* <td>{TravelCost}</td> */}
        </tr>
        <tr>
          <td>Total</td>
          {/* <td>{TotalCost}</td> */}
        </tr>
      </table>
    );
  }
}

export default ExpensesComponent;