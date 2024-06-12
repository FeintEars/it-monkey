class Entity {
    static counetr = 0;
    static generateid() {
    Entity.counter++;
    return Entity.counter;
  } 

  construktor () {
    this.id = Entity.generateid
  }
}
 
export { Entity }








