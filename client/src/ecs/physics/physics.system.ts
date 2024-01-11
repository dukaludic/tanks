import System from '../system'
import BodyComponent from './body.component'

export default class PhysicsSystem extends System {
  constructor() {
    super()
  }

  update() {
    for (const component of this.components) {
      component.position.x += component.velocity.x
      component.position.y += component.velocity.y
      // component.velocity = component.velocity.add(
      //   component.acceleration.scale(delta),
      // )
      // component.position = component.position.add(
      //   component.velocity.scale(delta),
      // )
    }
  }

  createBodyComponent(posX: any, posY: any) {
    const component = new BodyComponent(posX, posY)
    this.components.push(component)
    return component
  }
}
