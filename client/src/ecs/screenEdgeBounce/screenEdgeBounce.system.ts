import Vector2 from '../vector2'
import System from '../system'
import ScreenEdgeBounceComponent from './screenEdgeBounce.component'

const config: any = {}

export default class ScreenEdgeBounceSystem extends System {
  width: number
  height: number

  constructor() {
    super()
    this.width = config.width
    this.height = config.height
  }

  update(delta: any) {
    //TMP RADIAL COLLISION
    // for (const component of this.components) {
    //   const bodyComponent = component.bodyComponent
    //   const graphicsComponent = component.graphicsComponent
    //   if (bodyComponent.position.x + bodyComponent.radius >= this.width) {
    //     let diff = bodyComponent.position.x + bodyComponent.radius - this.width
    //     bodyComponent.position = new Vector2(
    //       bodyComponent.position.x - 2 * diff,
    //       bodyComponent.position.y,
    //     )
    //     bodyComponent.velocity = new Vector2(
    //       -bodyComponent.velocity.x,
    //       bodyComponent.velocity.y,
    //     )
    //     graphicsComponent.setRandomColor()
    //   }
    //   if (bodyComponent.position.x - bodyComponent.radius <= 0) {
    //     let diff = bodyComponent.position.x - bodyComponent.radius
    //     bodyComponent.position = new Vector2(
    //       bodyComponent.position.x - 2 * diff,
    //       bodyComponent.position.y,
    //     )
    //     bodyComponent.velocity = new Vector2(
    //       -bodyComponent.velocity.x,
    //       bodyComponent.velocity.y,
    //     )
    //     graphicsComponent.setRandomColor()
    //   }
    //   if (bodyComponent.position.y + bodyComponent.radius > this.height) {
    //     let diff = bodyComponent.position.y + bodyComponent.radius - this.height
    //     bodyComponent.position = new Vector2(
    //       bodyComponent.position.x,
    //       bodyComponent.position.y - 2 * diff,
    //     )
    //     bodyComponent.velocity = new Vector2(
    //       bodyComponent.velocity.x,
    //       -bodyComponent.velocity.y,
    //     )
    //     graphicsComponent.setRandomColor()
    //   }
    // }
  }

  createScreenEdgeBounceComponent(bodyComponent: any, graphicsComponent: any) {
    const component = new ScreenEdgeBounceComponent(
      bodyComponent,
      graphicsComponent,
    )
    this.components.push(component)
    return component
  }
}
