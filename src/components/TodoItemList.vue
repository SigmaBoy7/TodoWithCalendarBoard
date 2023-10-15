<template>
    <div>
        <div class=" m-auto max-w-4xl">
            <h2 class="text-3xl mb-5">Сегодня</h2>
            <TodoItem
            v-for="todo in props.todos"
            :todo="todo"
            :key="todo.id"/>
        </div>
    </div>
</template>

<script setup>
    import TodoItem from '@/components/TodoItem.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        todos: {
            type: Array,
            required: true
        }
    })
    
</script>

<style scoped>
</style>