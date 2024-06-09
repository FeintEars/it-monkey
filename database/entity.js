let id = 0;
function generateId() {
  id++;
  return id;
}

class Entyti {
  constructor() {
    this.id = generateId();
  }
}

export { Entyti }