import Vector2 from '../vector2'
import Component from '../component'

export default class BodyComponent extends Component {
  position: Vector2
  velocity: Vector2
  acceleration: Vector2

  constructor(x: number, y: number) {
    super()
    this.position = new Vector2(x, y)
    this.velocity = new Vector2(x, y)
    this.acceleration = new Vector2(x, y)
  }
}
