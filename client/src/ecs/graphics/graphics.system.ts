import System from '../system'
import * as PIXI from 'pixi.js'
import BodyGraphicsComponent from './body.graphics.component'
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
  }

  update() {
    this.graphics.clear()
    for (const component of this.components) {
      this.graphics.beginFill(component.color)
      this.graphics.drawRect(
        component.bodyComponent.position.x,
        component.bodyComponent.position.y,
        100,
        100,
      )
    }
  }

  createGraphicsComponent(bodyComponent: any) {
    let graphicsComponent = new BodyGraphicsComponent(bodyComponent)
    this.components.push(graphicsComponent)
    return graphicsComponent
  }
}
