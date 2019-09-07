import React from 'react'
import Card from 'react-bootstrap/Card'
const images = require.context("../images/parliament/")

export default class MPImage extends React.Component{
  calculateImageName() {
    let imageName = (this.props.mpName ? ("./" + this.props.mpName.replace(",", "").replace(/ /g, "") + ".jpg") : "");
    if(images.keys().includes(imageName))
      return images(imageName)
    
    return images('./placeholder.png')
  }

  constructor() {
    super()
    this.calculateImageName = this.calculateImageName.bind(this)
  }

  render() {
    return <Card.Img src={(this.calculateImageName())}/>
    
  }
}