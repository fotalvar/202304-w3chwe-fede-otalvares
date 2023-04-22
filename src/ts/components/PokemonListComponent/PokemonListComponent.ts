import Component from "../Component/Component.js";
import { type ComponentStructure } from "../types";
import { type Pokemon } from "../../types.js";

class PokemonListComponent extends Component {
  public apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  private pokemonList: Pokemon[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "ul", "list_items");

    (async () => this.getPokemonList())();
  }

  async getPokemonList(): Promise<void> {
    const response = await fetch(this.apiUrl);
    const pokemonList = (await response.json()) as Pokemon[];

    this.pokemonList = pokemonList;

    this.renderHtml();
  }

  renderHtml(): void {
    throw new Error("Method not implemented.");
  }
}

export default PokemonListComponent;
