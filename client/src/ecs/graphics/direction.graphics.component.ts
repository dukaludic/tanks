import Component, { IComponent } from '../component'

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export type AnyDirection =
  | Direction.Up
  | Direction.Down
  | Direction.Left
  | Direction.Right

export default class DirectionGraphicsComponent extends Component {
  graphicsComponent: IComponent
  direction: AnyDirection
  sprite: string

  constructor(
    graphicsComponent: IComponent,
    direction: AnyDirection = Direction.Up,
    sprite: string,
  ) {
    super()
    this.graphicsComponent = graphicsComponent
    this.direction = direction
    this.sprite = sprite
  }
}
