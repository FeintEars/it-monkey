class Entity {
  static counter = 0;
  static generateId() {
    Entity.counter++;
    return Entity.counter;
  }
  constructor() {
    this.id = Entity.generateId();
  }
}
export { Entity };
