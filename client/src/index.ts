import MainLoop from 'mainloop.js'
import PhysicsSystem from './ecs/physics/physics.system'
import GraphicsSystem from './ecs/graphics/graphics.system'
import Entity from './ecs/entity'
import KeyboardInputSystem from './ecs/input/keyboardInput.system'

// const tankSprite = new Image()
// tankSprite.src = './images/tank.png'

const tankSprite: ImageBitmap = require('./images/tank.png')

let physicsSystem = new PhysicsSystem()
let graphicsSystem = new GraphicsSystem()
let keyboardInputSystem = new KeyboardInputSystem()

createTank()

MainLoop.setUpdate((delta: number) => {
  const deltaInSecs = delta / 1000
  physicsSystem.update()
  keyboardInputSystem.update()

  physicsSystem.deleteStaleComponents()
  keyboardInputSystem.deleteStaleComponents()
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
    tankSprite,
  )
  const keyboardInputComponent = keyboardInputSystem.createKeyboardInputComponent(
    tankBodyComponent,
  )
  tankEntity.attachComponents([
    tankBodyComponent,
    tankGraphicsComponent,
    keyboardInputComponent,
  ])
}
