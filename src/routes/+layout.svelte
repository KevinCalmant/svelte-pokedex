<script lang="ts">
    import "../app.css";
</script>

<div class="flex flex-row justify-center items-center w-full">
    <div class="m-auto w-full">
        <img class="header-logo m-auto -mt-12 -mb-12" src="src/assets/header-logo.png" alt="header logo" />
        <slot />
    </div>
</div>