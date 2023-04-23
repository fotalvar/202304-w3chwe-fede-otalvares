import Component from "../Component/Component.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <header class="header">
      <img src="img/logo_pokemon.svg" alt="Pokémon logo" width="300">
      <h1>PokeDex</h1>
      <nav class="nav">
        <ul class="nav_items">
          <li class="nav_item"><a href="./index.html">Todos los Pokémon</a></li>
        </ul>
      </nav>
    </header>
    <main class="main_container">
    </main>
    `;

    const mainContainer = this.element.querySelector(".main_container")!;
    new PokemonListComponent(mainContainer);
  }
}

export default AppComponent;
