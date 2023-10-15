<template>
    <div class="dropdown" v-if="props.show">
        <div>
            <div class="absolute right-0 z-10 p-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1">
                    <slot></slot>  
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'my-dropdown',
    }
</script>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        show: {
            type:Boolean,
            required: true
        }
    })
</script>

<style scoped>

</style>