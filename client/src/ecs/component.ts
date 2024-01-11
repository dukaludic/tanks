export interface IComponent {
  id: string
  isDeleted: boolean

  delete: () => void
}

export default class Component implements IComponent {
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
