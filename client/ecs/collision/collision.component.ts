import Component from '../component'

export default class CollisionComponent extends Component {
  bodyComponent: any
  collisionTag: any
  collisionCallbacks: any

  constructor(bodyComponent: any, collisionTag: any) {
    super()
    this.bodyComponent = bodyComponent
    this.collisionTag = collisionTag
  }

  setCollisionCallback(targetCollisionTag: any, callback: any) {
    this.collisionCallbacks[targetCollisionTag] = callback
  }
}
