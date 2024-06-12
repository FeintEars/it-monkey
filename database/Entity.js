class Entity {
    static counter = 0;
    static generateid() {
    Entity.counter++;
    return Entity.counter;
  } 

  construсtor () {
    this.id = Entity.generateid()
  }
}
 
export { Entity }








