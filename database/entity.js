class Entity {
static counter = 0
static generateId() {
    Entity.counter++;
    return Entity.counter;
}
constructor(){
    this.Id = Entity.generateId();
}
}
export {Entity}