<script>
    import "./PokemonCard.css";
</script>

<div
        class="pokemon-card animate-pulse rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 opacity-25">
    <div class="pokemon-container">
        <div class="pokemon bg-info pokeball rounded-full bg-pokemon"/>
    </div>
    <div class="flex flex-col justify-start flex-1 space-y-6 pl-5">
        <div class="h-5 w-9/12 bg-info rounded"></div>
        <div class="h-11 pt-4 w-9/12 bg-info rounded"></div>
    </div>
    <div class="flex flex-col justify-center">
        <div class="bg-info rounded-2xl min-w-max text-center">
            <h3 class="pokemon-number font-extrabold p-2"></h3>
        </div>
    </div>
</div>