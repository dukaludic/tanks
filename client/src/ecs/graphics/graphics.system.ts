import System from '../system'
import * as PIXI from 'pixi.js'
import BodyGraphicsComponent from './body.graphics.component'
import { IComponent } from '../component'

const config: any = {
  height: 600,
  width: 1200,
} //to import

export default class GraphicsSystem extends System {
  parentElement: HTMLElement
  width: number
  height: number
  app: PIXI.Application
  graphics: PIXI.Graphics
  components: BodyGraphicsComponent[]

  constructor() {
    super()
    this.parentElement = document.getElementById('root')!
    this.width = config.width
    this.height = config.height
    this.app = new PIXI.Application({
      background: '#1099bb',
      resizeTo: window,
    })
    this.parentElement.appendChild(this.app.view as any)
    this.graphics = new PIXI.Graphics()
    this.app.stage.addChild(this.graphics)
    this.components = []
  }

  update() {
    this.graphics.clear()
    for (const component of this.components) {
      const tank = PIXI.Texture.from(component.sprite)
      this.app.stage.addChild(tank)
      this.graphics.beginFill('green')
      this.graphics.drawRect(
        component.bodyComponent.position.x,
        component.bodyComponent.position.y,
        100,
        100,
      )
    }
  }

  createGraphicsComponent(bodyComponent: IComponent, sprite: ImageBitmap) {
    let graphicsComponent = new BodyGraphicsComponent(bodyComponent, sprite)
    this.components.push(graphicsComponent)
    return graphicsComponent
  }
}
