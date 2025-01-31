const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
    const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
      response.json()
    );
    return Promise.all(
      spellIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
}

export async function getAllMonsters() {
    const monsterIndexes = await fetch(BASE_URL + "/api/monsters").then((response) =>
      response.json()
    );
    return Promise.all(
      monsterIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
}
