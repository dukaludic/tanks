import System from '../system'
import CollisionComponent from './collision.component'

export default class CollisionSystem extends System {
  constructor() {
    super()
  }

  update() {
    const collisionInstances = []
    for (let i = 0; i < this.components.length; i++) {
      for (let j = i + 1; j < this.components.length; j++) {
        const iComponent = this.components[i]
        const jComponent = this.components[j]

        if (checkOverlap(iComponent.bodyComponent, jComponent.bodyComponent)) {
          if (iComponent.collisionCallbacks[jComponent.collisionTag]) {
            collisionInstances.push(
              iComponent.collisionCallbacks[jComponent.collisionTag],
            )
          }
          if (jComponent.collisionCallbacks[iComponent.collisionTag]) {
            collisionInstances.push(
              jComponent.collisionCallbacks[iComponent.collisionTag],
            )
          }
        }
      }
    }

    for (const collisionInstance of collisionInstances) {
      collisionInstance()
    }
  }

  createCollisionComponent(bodyComponent: any, collisionTag: any) {
    const collisionComponent = new CollisionComponent(
      bodyComponent,
      collisionTag,
    )
    this.components.push(collisionComponent)
  }
}

function checkOverlap(b1: any, b2: any) {
  if (
    b1.position.x + b1.width < b2.position.x ||
    b1.position.x > b2.position.x + b2.width ||
    b1.position.y + b1.height < b2.position.y ||
    b1.position.y > b2.position.y + b2.height
  ) {
    return false
  }
  return true
}
