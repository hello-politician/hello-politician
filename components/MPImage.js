import React from 'react'
import Card from "react-bootstrap/Card";
export default class MPImage extends React.Component{
  calculateImageName() {
    return "./../images/Parliament/" + (this.props.mpName ? this.props.mpName.replace(",", "").replace(" ", "") + ".jpg" : "AdamsAmy.jpg");
  }
  // AdamsAmy.jpg
  // "AdamsAmy.jpg"

  constructor() {
    super()
    this.calculateImageName = this.calculateImageName.bind(this)
  }
//+ this.calculateImageName()
  render() {
    return <Card.Img src={require("../images/Parliament/AdamsAmy.jpg" )}></Card.Img>
  }
}