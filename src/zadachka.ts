const season = "літо"; // "осінь" // "зима" // "весна" ;
const temperature = "холодна"; // "помірна" // "тепла" ;
const interest = "місто"; // "гори";

function selectRout(
  season: string,
  temperature: string,
  interest: string,
): string {
  if (season === "літо" && temperature === "тепла" && interest === "місто") {
    return "Рим";
  } else if (
    season === "зима" &&
    temperature === "тепла" &&
    interest === "місто"
  ) {
    return "Каїр";
  } else if (
    season === "весна" &&
    temperature === "тепла" &&
    interest === "місто"
  ) {
    return "Лондон";
  } else if (
    season === "осінь" &&
    temperature === "тепла" &&
    interest === "місто"
  ) {
    return "Париж";
  } else if (temperature === "помірна" && interest === "гори") {
    return "Карпати";
  } else if (
    temperature === "помірна" &&
    interest === "місто" &&
    season === "літо"
  ) {
    return "Афіни";
  } else if (
    temperature === "помірна" &&
    interest === "місто" &&
    season === "зима"
  ) {
    return "Токіо";
  } else if (
    temperature === "помірна" &&
    interest === "місто" &&
    season === "весна"
  ) {
    return "Сеул";
  } else if (
    temperature === "помірна" &&
    interest === "місто" &&
    season === "осінь"
  ) {
    return "Копенгаген";
  } else if (
    /* (season === "літо" && temperature === "холодна") || 
    (season === "весна" && temperature === "холодна")*/

    temperature === "холодна" &&
    (season === "літо" || season === "зима")
  ) {
    return "Манчестер";
  } else if (
    (season === "осінь" && temperature === "холодна") ||
    (season === "зима" && temperature === "холодна")
  ) {
    return "Ліверпуль";
  } else {
    return "Не можу підібрати маршрут за твоїми вподобаннями";
  }
}
const route = selectRout(season, temperature, interest);
console.log(route);

/*якщо погода тепла:
влітку - Рим
зимою - Каїр
весною - Лондон
восени - Париж

якщо погода помірна:
для interest "гори" - Карпати

для interest "місто" -
влітку - Афіни
зимою - Токіо
весною - Сеул
восени - Копенгаген

якщо погода холодна:
влітку і весною - Манчестер
весною і восени - Ліверпуль*/
