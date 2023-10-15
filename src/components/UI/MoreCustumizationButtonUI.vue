<template>
    <div>
        <button class="flex px-4 py-1 border items-center hover:bg-gray-100">
            <slot name="svg"></slot>
            <slot name="text"></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name : 'custumization-button'
    }
</script>

<style scoped>

</style>