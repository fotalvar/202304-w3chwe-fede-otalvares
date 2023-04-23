export interface ComponentStructure {
  element: Element;
  renderHtml: () => void;
}
export interface PokemonListStructure {
  name: string;
  url: string;
  results: PokemonListStructure[];
}
