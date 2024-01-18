import System from '../system'
import * as PIXI from 'pixi.js'
import BodyGraphicsComponent from './body.graphics.component'
import { IComponent } from '../component'
import DirectionGraphicsComponent, {
  AnyDirection,
} from './direction.graphics.component'

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
    this.clearStage(this.app.stage)

    for (const component of this.components) {
      const tank = PIXI.Sprite.from(component.sprite)

      tank.x = component.bodyComponent.position.x
      tank.y = component.bodyComponent.position.y
      this.app.stage.addChild(tank)
    }
  }

  createGraphicsComponent(bodyComponent: IComponent, sprite: string) {
    const graphicsComponent = new BodyGraphicsComponent(bodyComponent, sprite)
    this.components.push(graphicsComponent)
    return graphicsComponent
  }

  createDirectionGraphicsComponent(
    bodyComponent: IComponent,
    direction: AnyDirection,
    sprite: string,
  ) {
    const directionGraphicsComponent = new DirectionGraphicsComponent(
      bodyComponent,
      direction,
      sprite,
    )
    return directionGraphicsComponent
  }

  clearStage(stage: typeof this.app.stage) {
    for (var i = stage.children.length - 1; i >= 0; i--) {
      stage.removeChild(stage.children[i])
    }
  }
}
