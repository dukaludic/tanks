import Component, { IComponent } from '../component'
import { AnyDirection } from './direction.graphics.component'

export default class BodyGraphicsComponent extends Component {
  bodyComponent: any
  direction: AnyDirection
  sprite: string

  constructor(
    bodyComponent: IComponent,
    direction: AnyDirection,
    sprite: string,
  ) {
    super()
    this.bodyComponent = bodyComponent
    this.sprite = sprite
    this.direction = direction
  }
}
