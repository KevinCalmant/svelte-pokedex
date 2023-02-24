import type {PokemonSprites} from "./PokemonSprites";
import type {PokemonType} from "./PokemonType";

export type Pokemon = {
 id: number;
 name: string;
 sprites: PokemonSprites;
 types: PokemonType[];
}