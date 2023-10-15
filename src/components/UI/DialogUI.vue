<template>
    <div class="top-0 bottom-0 right-0 left-0 fixed flex bg-prozr-rgba" v-if="props.show" @click="hideDialog">
        <div @click.stop class="m-auto bg-white rounded-xl min-h-12 min-w-72 p-5">
        <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
    }
</script>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        show: {
            type:Boolean,
            required: true
        }
    })
    const emit = defineEmits(['update:show'])
    const hideDialog = async() => {
        emit('update:show', false)
    }
</script>

<style>
</style>