import Component from "../Component/Component.js";
import { type PokemonStructure } from "../../types.js";

class PokemonCardComponent extends Component {
  pokemonData: PokemonStructure;
  constructor(parentElement: Element, public url: string) {
    super(parentElement, "li", "list_item");

    (async () => this.getPokemon())();
  }

  async getPokemon(): Promise<void> {
    const response = await fetch(this.url);
    const pokemonData = (await response.json()) as PokemonStructure;

    this.pokemonData = pokemonData;

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <div class="pokemon_card">
    <span class="pokemon_id">${this.pokemonData.id}</span>
    <span>${this.pokemonData.name}</span>
    <img class="pokemon_image"src=${this.pokemonData.sprites.front_default} alt="${this.pokemonData.name}" witdh="96" height="96">
    </div>
    `;
  }
}

export default PokemonCardComponent;
