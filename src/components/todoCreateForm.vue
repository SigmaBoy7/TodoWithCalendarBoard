<template>
    <form @submit.prevent>
        <h2 style="font-size: 18px; color: rgb(171, 76, 45);">Создание задачи</h2>
        <my-input v-model="todo.name" placeholder="Название задачи" class="font-bold border-0 border-b-2 border-orange-600"></my-input>
        <my-input v-model="todo.description" placeholder="Описание" class="border-0 border-b-2 border-orange-600"></my-input>
        <div class="flex flex-col">
            <VDatePicker :min-date="todoStore.userDate" class="mt-5" v-model="date">
                <template #default="{ togglePopover }">
                    <custumization-button @click="togglePopover" class="mt-2 text-green-600">
                        <template v-slot:svg>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mr-2"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"></path></svg>
                        </template>
                        <template v-if="date == todoStore.userDate " v-slot:text>
                            Сегодня
                        </template>
                        <template v-else-if="moment(date).subtract(1, 'day').format('MM.DD.YYYY') == todoStore.userDate" v-slot:text>
                            Завтра
                        </template>
                        <template v-else v-slot:text>
                            {{ moment(date).format('DD MMMM') }}
                        </template>
                    </custumization-button>
                </template>
            </VDatePicker>
            <my-button @click="createTodo" class="my-3">Создать</my-button>
        </div>
    </form>
</template>

<script setup>
    import { defineEmits,ref } from 'vue';
    import { useTodoStore } from '@/store/todoModule';

    const todoStore = useTodoStore()
    const moment = require('moment'); // require

    const date = ref(todoStore.userDate)

    const todo = {
        id: '',
        name: '',
        description: '',
        date: ''
    }

    const emit = defineEmits(['create', 'update:dialogVisible'])

    // const disabledDates = ref([{ start: todoStore.userDate, end: todoStore.userDate }]);


    const createTodo = async() => {
        todo.id = Math.round(Math.random() * 1000)
        todo.date = moment(date.value).format('MM.DD.YYYY')
        emit('create', todo)
        emit('update:dialogVisible')
    }
</script>

<style  scoped>
</style>