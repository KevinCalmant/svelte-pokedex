<script lang="ts">
  import {regionData} from "../data/regionData";
  import {selectedRegion} from "../store/region.store";
  import type {Region} from "../types/region";

  let regions = regionData;

  export const handleRegionClick = (region: Region) => {
    selectedRegion.set(region);
  }
</script>

<div class="flex flex-row justify-center">
    <nav class="w-6/12 rounded-2xl flex flex-col justify-center font-medium">
        <ul class="flex flex-row justify-around p-4 font-extrabold">
            {#each Object.entries(regions) as [regionName, info]}
                <li class="mb-0.5 hover:border-b-2 cursor-pointer" class:border-b-2={$selectedRegion === regionName}
                    on:click={() => handleRegionClick(regionName)}>
                    {regionName}
                </li>
            {/each}
        </ul>
    </nav>
</div>

<style>
    nav {
        background-color: var(--color-primary-2);
        color: var(--color-primary-4);
    }

    ul {
        text-transform: capitalize;
    }
</style>