import Component from '../component'

export default class BodyGraphicsComponent extends Component {
  bodyComponent: any
  color: number

  constructor(bodyComponent) {
    super()
    this.bodyComponent = bodyComponent
    this.setRandomColor()
  }

  setRandomColor() {
    this.color = randomColor()
  }
}

function randomColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return (red << 16) + (green << 8) + blue
}
