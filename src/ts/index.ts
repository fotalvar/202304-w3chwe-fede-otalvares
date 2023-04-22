import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";

const appContainer = document.querySelector(".app");

if (appContainer) {
  new AppComponent(appContainer);
}
