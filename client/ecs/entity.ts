import { IComponent } from './component'

export interface IEntity {
  id: string
  components: IComponent[]

  attachComponents: (components: IComponent[]) => void

  deleteComponents: () => void
}

export default class Entity implements IEntity {
  id: string
  components: IComponent[]

  constructor() {
    this.id = crypto.randomUUID()
    this.components = []
  }

  attachComponents(components: IComponent[]) {
    this.components = [...this.components, ...components]
  }

  deleteComponents() {
    for (const component of this.components) {
      component.delete()
    }
    this.components = []
  }
}
