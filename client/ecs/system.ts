import { IComponent } from './component'

export interface ISystem {
  components: IComponent[]
  update: (delta: any) => void
  deleteStaleComponents: () => void
}

export default class System implements ISystem {
  components: (IComponent & any)[]

  constructor() {
    this.components = []
  }

  update(delta: any) {
    throw new Error('Method not implemented')
  }

  deleteStaleComponents() {
    this.components = this.components.filter((c) => !c.isDeleted)
  }
}
