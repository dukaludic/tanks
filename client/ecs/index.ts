import * as MainLoop from './mainloop'
import PhysicsSystem from '../ecs/physics/physics.system'
import ScreenEdgeBounceSystem from '../ecs/screenEdgeBounce/screenEdgeBounce.system'
import GraphicsSystem from '../ecs/graphics/graphics.system'
import Entity from '../ecs/entity'

let physicsSystem = new PhysicsSystem()
let screenEdgeBounceSystem = new ScreenEdgeBounceSystem()
let graphicsSystem = new GraphicsSystem()

createBouncingBall(50, 50)
createBouncingBall(200, 70)
createBouncingBall(350, 90)
createBouncingBall(500, 110)

MainLoop.setUpdate((delta) => {
  const deltaInSecs = delta / 1000
  physicsSystem.update(deltaInSecs)
  screenEdgeBounceSystem.update(deltaInSecs)

  physicsSystem.deleteStaleComponents()
  screenEdgeBounceSystem.update()
}).setDraw(() => {
  graphicsSystem.update()
  graphicsSystem.deleteStaleComponents()
})

MainLoop.start()

function createBouncingBall(posX, posY) {
  let entity = new Entity()
  let bodyComponent = physicsSystem.createBodyComponent(posX, posY)
  let graphicsComponent = graphicsSystem.createGraphicsComponent(bodyComponent)
  let screenEdgeBounceComponent = screenEdgeBounceSystem.createScreenEdgeBounceComponent(
    bodyComponent,
    graphicsComponent,
  )
  entity.attachComponents(
    bodyComponent,
    graphicsComponent,
    screenEdgeBounceComponent,
  )
}
