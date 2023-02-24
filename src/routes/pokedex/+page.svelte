<script lang="ts">
  import RegionNavigator from "../../components/RegionNavigator.svelte";
  import {selectedRegion} from "../../store/region.store";
  import {onDestroy} from "svelte";
  import PokemonCard from "../../components/PokemonCard.svelte";
  import PokeWait from "../../components/PokeWait.svelte";
  import {regionData} from "../../data/regionData";
  import type {Pokemon} from "../../models/Pokemon";
  import type {PokeApiResponse} from "../../models/PokeApiResponse";

  let loading = true;
  let pokemons = [];

  const unsubscribe = selectedRegion.subscribe(async (selectedRegion) => {
    loading = true;
    const response = await fetch<PokeApiResponse<Pokemon>>(`https://pokeapi.co/api/v2/pokemon?offset=${regionData[selectedRegion].firstPokemonNum}&limit=${regionData[selectedRegion].numberOfPokemon}`);
    const data = await response.json();
    pokemons = data.results;
    loading = false;
  });

  onDestroy(unsubscribe);
</script>

<div class="flex flex-col justify-center gap-5 w-full">
    <RegionNavigator/>
    {#if loading}
        <PokeWait message="Pokedex is starting!" />
    {:else}
        <h2 class="m-auto font-bold">Click the cards to see pokemon details!</h2>
        <div class="flex flex-grow gap-5 flex-wrap m-auto w-10/12 md:w-9/12 justify-center mt-5 mb-5">
            {#each pokemons as pokemon}
                <PokemonCard key={pokemon.name} url={pokemon.url} />
            {/each}
        </div>
    {/if}
</div>

<style>
    h2 {
        color: var(--color-primary-4);
    }
</style>