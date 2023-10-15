<template>
    <form @submit.prevent>
        <h2 style="font-size: 18px; color: rgb(255, 88, 32);">Изменение задачи</h2>
        <my-input v-model="newTodo.name" placeholder="Название задачи" class="font-bold border-0 border-b-2 border-orange-600"></my-input>
        <my-input v-model="newTodo.description" placeholder="Описание" class="border-0 border-b-2 border-orange-600"></my-input>
        <my-button @click="updateTodo" class=" my-3">Изменить</my-button>
    </form>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const newTodo = {
        id: '',
        name: '',
        description: ''
    }

    const props = defineProps({
        todo: {
            type: Object,
            required: true
        }
    })
    const emit = defineEmits(['update', 'update:dialogVisible'])

    const updateTodo = async() => {
        newTodo.id = props.todo.id
        emit("update", newTodo)
        emit('update:dialogVisible')
    }
</script>

<style>
</style>