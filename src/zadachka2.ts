const type = "earth"; // "air"
const distance = 5;
const isOcean = false;

function travel(type: string, distance: number, isOcean: boolean): string {
  if (type === "air") {
    if (distance > 1000) {
      return "Літак";
    }
    if (distance <= 1000) {
      return "Дельтаплан";
    }
  }

  if (type === "earth") {
    if (isOcean) {
      return "Неможливо переїхати океан";
    }
    if (distance <= 5) {
      return "Пішки";
    }
    if (distance > 5) {
      return "Автомобіль";
    }
  }

  return "Тоді сиди вдома";
}
const transport = travel(type, distance, isOcean);
console.log(transport);
