<template>
    <div class="flex items-center">
        <div class="mr-2">
            <slot name="svg"></slot>
        </div>
        <div>
            <slot class="text" name="text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "svg-button",
    }
</script>

<style>
</style>