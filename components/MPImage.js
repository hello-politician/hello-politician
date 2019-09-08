import React from 'react'
import styled from 'styled-components'
const images = require.context("../images/parliament/")

const CardImg = styled.div`
  height: 100px;
  width: 100px;
  background: ${({ image }) => `url(${image}) no-repeat`};
  background-size: cover;
  border-radius: 5px;
  margin: -8px 0;`

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
    return <CardImg image={(this.calculateImageName())}/>
  }
}