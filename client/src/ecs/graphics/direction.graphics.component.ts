import Component, { IComponent } from '../component'

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

type AnyDirection =
  | Direction.Up
  | Direction.Down
  | Direction.Left
  | Direction.Right

export default class DirectionGraphicsComponent extends Component {
  bodyComponent: any
  direction: AnyDirection

  constructor(
    bodyComponent: IComponent,
    direction: AnyDirection = Direction.Up,
  ) {
    super()
    this.bodyComponent = bodyComponent
    this.direction = direction
  }
}
