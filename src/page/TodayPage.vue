<template>
    <div class="flex flex-col max-w-4xl m-auto">
        <TodoItemList v-model:todos="todayTodos"/>
        <my-button class="mt-3" @click="changeDialog">+ Добавить задачу</my-button>
        <my-dialog v-model:show="dialogVisible">
            <todoCreateForm
            @create="useUserTodosCreateTodo"
            @update:dialogVisible="changeDialog"
            />
        </my-dialog>
    </div>  
</template>
<script setup>
    import TodoItemList from "@/components/TodoItemList"
    import todoCreateForm from "@/components/todoCreateForm"
    import { useTodoStore } from "@/store/todoModule"
    import { ref } from "vue";
    import useUserTodos from "@/composables/TodoComposables/useUserTodos"

    const todoStore = useTodoStore()
    const todayTodos = todoStore.todos.filter(todo => todo.date == todoStore.userDate)

    const  { useUserTodosCreateTodo } = useUserTodos(todoStore)
    let dialogVisible = ref(false)

    const changeDialog = () => {
        dialogVisible.value = !dialogVisible.value
    }
</script>

<style scoped>
</style>