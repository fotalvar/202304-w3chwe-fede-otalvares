import { PokemonStructure } from "../../types";
import PokemonCardComponent from "./PokemonCardComponent";

describe("Given a PokemonCardComponent component", () => {
  describe("When it receives Bulbasaur data", () => {
    test("Then it should show '1' inside a pokemon_id class span", () => {
      const id = 1;
      const bulbasaurUrl = "https://pokeapi.co/api/v2/pokemon/1/";

      const container = document.createElement("div");
      new PokemonCardComponent(container, bulbasaurUrl);

      const pokemonId = container.querySelector(".pokemon_id");

      expect(pokemonId).toBe(id);
    });
  });
});
