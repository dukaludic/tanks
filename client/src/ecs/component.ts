export interface IComponent {
  id: string
  isDeleted: boolean

  delete: () => void

  [key: string]: string | boolean | (() => void) | Record<string, any> | any
}

export default class Component implements Partial<IComponent> {
  id: string
  isDeleted: boolean

  constructor() {
    this.id = crypto.randomUUID()
    this.isDeleted = false
  }

  delete() {
    this.isDeleted = true
  }
}
