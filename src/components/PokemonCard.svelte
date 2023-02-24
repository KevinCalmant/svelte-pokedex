<script lang="ts">
  import "./PokemonCard.css";
  import {onMount} from "svelte";
  import type {Pokemon} from "../models/Pokemon";
  import PokemonType from "./PokemonType.svelte";
  import PokemonCardSkeleton from "./PokemonCardSkeleton.svelte";

  export let url: string;
  export let key: string;

  let loading = true;
  let pokemon: Pokemon;
  onMount(async () => {
    const response = await fetch<Pokemon>(url)
    pokemon = await response.json();
    loading = false;
  })
</script>

{#if !loading && pokemon != null}
    <div class="pokemon-card rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 duration-100 hover:border-2">
        <div class="pokemon-container">
            <img src="src/assets/pokeball.svg" alt="pokeball" class="pokeball"/>
            <img src={pokemon?.sprites.front_default} alt={`${key}-sprite`} class="pokemon rounded-full bg-pokemon"/>
        </div>
        <div class="flex flex-col justify-start flex-1 space-y-6 pl-5">
            <h1 class="pokemon-name h-5 w-9/12 font-extrabold">
                {pokemon?.name}
            </h1>
            <div class="h-11 pt-4 w-full flex flex-row gap-1">
                {#each pokemon?.types || [] as type}
                    <PokemonType type={type.type.name} />
                {/each}
            </div>
        </div>
        <div class="flex flex-col justify-center">
            <div class="bg-info rounded-2xl min-w-max text-center">
                <div class="pokemon-number font-extrabold p-2"># {pokemon?.id}</div>
            </div>
        </div>
    </div>
{:else}
    <PokemonCardSkeleton />
{/if}
