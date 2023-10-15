<template>
    <div class="flex flex-row justify-between items-center p-2 text-sm transition-shadow border-t-2 hover:shadow-lg [&:not(:last-child)]:mb-3">
        <div class="flex items-center">
            <todo-ready-button @click="useUserTodosDeleteTodo(this.todo)"/>
            <div class="ml-4">
                <div class="mb-1">{{ props.todo.name }}</div>
                <div>{{ props.todo.description }}</div>
            </div>
        </div>
        <div class="todo__actions" >
            <dropdown-button v-on-click-outside="onClickOutsidePopover" v-model:show="popoverVisible" @click="changePopoverStatus"  class="todo__more-actions">
                <my-dropdown :show="popoverVisible">
                    <button @click="dialogVisible=true" class="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300 w-full">
                        <svg-button class="dropdown-item">
                            <template v-slot:svg>
                                <svg width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg>                            </template>
                            <template v-slot:text>Изменить задачу</template>
                        </svg-button>
                    </button>  
                    <button @click="useUserTodosDuplicateTodo(this.todo)" class="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300 w-full">
                        <svg-button class="dropdown-item">
                            <template v-slot:svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.26756 5H18C18.5523 5 19 5.44772 19 6V16.7324C19.5978 16.3866 20 15.7403 20 15V6C20 4.89543 19.1046 4 18 4H9C8.25972 4 7.61337 4.4022 7.26756 5ZM6 7H15C16.1046 7 17 7.89543 17 9V18C17 19.1046 16.1046 20 15 20H6C4.89543 20 4 19.1046 4 18V9C4 7.89543 4.89543 7 6 7ZM5 9C5 8.44772 5.44772 8 6 8H15C15.5523 8 16 8.44772 16 9V18C16 18.5523 15.5523 19 15 19H6C5.44772 19 5 18.5523 5 18V9ZM11 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H11V10.5C11 10.2239 10.7761 10 10.5 10C10.2239 10 10 10.2239 10 10.5V13H7.5C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H10V16.5C10 16.7761 10.2239 17 10.5 17C10.7761 17 11 16.7761 11 16.5V14Z" fill="currentColor"></path></svg>                            </template>
                            <template v-slot:text>Дублировать</template>
                        </svg-button>
                    </button>
                    <button @click="useUserTodosDeleteTodo(this.todo)" class="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300 w-full">
                        <svg-button class="dropdown-item__delete" style="color: rgb(183, 6, 6);">
                            <template v-slot:svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect width="14" height="1" x="5" y="6" fill="currentColor" rx="0.5"></rect><path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 008 19.5h8a1.5 1.5 0 001.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5v1.5z"></path></g></svg>
                            </template>
                            <template v-slot:text>Удалить</template>
                        </svg-button>
                    </button>
                </my-dropdown>
            </dropdown-button>
        </div>
        <my-dialog :show="dialogVisible">
            <todoChageForm
            :todo="this.todo"
            v-on-click-outside="changeDialog"
            @update="useUserTodosChangeTodo"
            @update:dialogVisible="changeDialog"
            />
        </my-dialog>
    </div>
</template>

<script setup>
    import { vOnClickOutside } from '@vueuse/components'
    import todoChageForm from '@/components/todoChageForm'
    import useUserTodos from "@/composables/TodoComposables/useUserTodos"
    import { useTodoStore } from "@/store/todoModule"
    import { ref, defineProps } from 'vue';
    
    const todoStore = useTodoStore()

    const  { useUserTodosDeleteTodo, useUserTodosDuplicateTodo, useUserTodosChangeTodo } = useUserTodos(todoStore)

    let dialogVisible = ref(false) 
    let popoverVisible = ref(false)

    const props = defineProps({
        todo: {
            type: Object,
            required: true
        }
    })

    const onClickOutsidePopover = () => {
        popoverVisible.value = false
    }
    const changePopoverStatus = () => {
        popoverVisible.value = !popoverVisible.value
    }
    const changeDialog = () => {
        dialogVisible.value = !dialogVisible.value
    }
</script>

<style>
</style>