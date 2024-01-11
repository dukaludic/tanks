import Component, { IComponent } from '../component'

export default class BodyGraphicsComponent extends Component {
  bodyComponent: any
  sprite: ImageBitmap

  constructor(bodyComponent: IComponent, sprite: ImageBitmap) {
    super()
    this.bodyComponent = bodyComponent
    this.sprite = sprite
  }
}
