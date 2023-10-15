<template>
    <header class="fixed z-50  justify-between items-center p-5 bottom-0 left-0 top-0 right-0 flex h-10 bg-orange-600">
        <div>
            <button @click="showSideBar" class="flex items-center cursor-pointer">
                <svg class="menu_icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.5 5h15a.5.5 0 110 1h-15a.5.5 0 010-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1z"></path></svg>
            </button>
        </div>
        <div>item</div>
    </header>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits(['update'])

    const showSideBar = async() => {
        emit('update')
    }
</script>

<style scoped>
</style>