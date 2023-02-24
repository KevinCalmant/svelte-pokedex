<script lang="ts">
    import RegionNavigator from "../../components/RegionNavigator.svelte";
    import {selectedRegion} from "../../store/region.store";

    selectedRegion.subscribe((selectedRegion) => console.log(selectedRegion));
</script>

<div class="flex flex-col justify-center gap-5 w-full">
    <RegionNavigator />
    <h2 class="m-auto font-bold">Click the cards to see pokemon details!</h2>
    <div class="flex flex-grow gap-5 flex-wrap m-auto w-10/12 md:w-9/12 justify-center mt-5 mb-5"></div>
</div>

<style>
    h2 {
        color: var(--color-primary-4);
    }
</style>