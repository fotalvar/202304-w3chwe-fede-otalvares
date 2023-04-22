export interface ComponentStructure {
  element: Element;
  renderHtml: () => void;
}
export interface PokemonsDataStructure {
  count?: number;
  next?: string;
  previous?: string;
  results: PokemonListStructure[];
}

export interface PokemonListStructure {
  name: string;
  url: string;
}
