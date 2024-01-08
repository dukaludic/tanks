import System from '../system'
import BodyGraphicsComponent from './body.graphics.component'
const config: any = {} //to import

export default class GraphicsSystem extends System {
  parentElement: HTMLElement
  width: number
  height: number
  app: any // any graphics API (this could be a good dep inversion)
  graphics: any

  constructor() {
    super()
    this.parentElement = config.rootElementId
    this.width = config.width
    this.height = config.height
    this.app = {}
    this.parentElement.appendChild(this.app.view)
    this.graphics = {}
    this.app.stage.addChild(this.graphics)
  }

  update() {
    // Equivalent to show() method
    this.graphics.clear()
    for (const component of this.components) {
      this.graphics.DRAW // implement graphics API
    }
  }

  createGraphicsComponent(bodyComponent) {
    let graphicsComponent = new BodyGraphicsComponent(bodyComponent)
    this.components.push(graphicsComponent)
    return graphicsComponent
  }
}
