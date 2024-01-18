import Component, { IComponent } from '../component'

export default class BodyGraphicsComponent extends Component {
  bodyComponent: any
  sprite: string

  constructor(bodyComponent: IComponent, sprite: string) {
    super()
    this.bodyComponent = bodyComponent
    this.sprite = sprite
  }
}
