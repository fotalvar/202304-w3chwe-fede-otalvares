export interface ComponentStructure {
  element: Element;
  renderHtml: () => void;
}
export interface PokemonListStructure {
  name: string;
  url: string;
  count: number;
  next: "string";
  previous: "string";
  results: PokemonListStructure[];
}
