import MainLoop from 'mainloop.js'
import PhysicsSystem from './ecs/physics/physics.system'
import ScreenEdgeBounceSystem from './ecs/screenEdgeBounce/screenEdgeBounce.system'
import GraphicsSystem from './ecs/graphics/graphics.system'
import Entity from './ecs/entity'
import KeyboardInputSystem from './ecs/input/keyboardInput.system'

let physicsSystem = new PhysicsSystem()
let screenEdgeBounceSystem = new ScreenEdgeBounceSystem()
let graphicsSystem = new GraphicsSystem()
let keyboardInputSystem = new KeyboardInputSystem()

createTank()

MainLoop.setUpdate((delta: any) => {
  const deltaInSecs = delta / 1000
  physicsSystem.update(deltaInSecs)
  keyboardInputSystem.update()
  screenEdgeBounceSystem.update(deltaInSecs)

  physicsSystem.deleteStaleComponents()
  screenEdgeBounceSystem.update(deltaInSecs)
}).setDraw(() => {
  graphicsSystem.update()
  graphicsSystem.deleteStaleComponents()
})

MainLoop.start()

function createTank() {
  const tankEntity = new Entity()
  const tankBodyComponent = physicsSystem.createBodyComponent(200, 200)
  const tankGraphicsComponent = graphicsSystem.createGraphicsComponent(
    tankBodyComponent,
  )
  tankEntity.attachComponents([tankBodyComponent, tankGraphicsComponent])
}
