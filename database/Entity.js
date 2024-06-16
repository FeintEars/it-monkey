class Entity {
  static counter = 0;
  static generateid() {
  Entity.counter++;
  return Entity.counter;
} 

constructor () {
  this.id = Entity.generateid()
}
}

export { Entity }