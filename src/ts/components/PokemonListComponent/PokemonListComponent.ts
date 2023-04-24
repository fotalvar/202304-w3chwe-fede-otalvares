import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";
import { type PokemonListStructure } from "../types.js";

class PokemonListComponent extends Component {
  apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0.";
  dataPokemons: PokemonListStructure[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "ul", "list_items");

    (async () => this.getPokemonList())();
  }

  async getPokemonList(): Promise<void> {
    const response = await fetch(this.apiUrl);
    const data = (await response.json()) as PokemonListStructure;

    this.dataPokemons = data.results;

    this.renderHtml();
  }

  renderHtml(): void {
    this.dataPokemons.forEach((dataPokemon) => {
      new PokemonCardComponent(this.element, dataPokemon.url);
    });
  }
}

export default PokemonListComponent;
