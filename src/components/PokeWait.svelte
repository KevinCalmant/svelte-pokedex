<script lang="ts">
    export let message: string;
</script>

<div class="flex flex-col justify-center items-center">
    <img src="src/assets/waiting-pokeball.gif" alt="pkeball loader"/>
    <h1 class="font-extrabold text-center">{message}</h1>
</div>

<style>
    img {
        max-width: 320px;
        max-height: 320px;
    }
</style>