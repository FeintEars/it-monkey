let id = 0;
function generateId() {
  id++;
  return id;
}

class Entity {
  constructor() {
    this.id = generateId();
  }
}

export { Entity }