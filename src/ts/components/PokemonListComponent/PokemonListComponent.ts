import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";
import {
  type PokemonsDataStructure,
  type PokemonListStructure,
} from "../types.js";

class PokemonListComponent extends Component {
  public apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0.";
  private dataPokemons: PokemonListStructure[] = [];
  constructor(parentElement: Element) {
    super(parentElement, "ul", "list_items");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(this.apiUrl);
    const data = (await response.json()) as PokemonsDataStructure;

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
