import Component from '../component'

export default class ScreenEdgeBounceComponent extends Component {
  bodyComponent: any
  graphicsComponent: any

  constructor(bodyComponent: any, graphicsComponent: any) {
    super()
    this.bodyComponent = bodyComponent
    this.graphicsComponent = graphicsComponent
  }
}
