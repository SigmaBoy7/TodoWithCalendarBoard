<template>
    <div>
        <div class="flex">
            <div @dragover.prevent @dragenter.prevent @drop="onDrop($event, day)" v-for="day in props.weekArray" v-bind:key="day" class="droppable w-60 flex flex-col ml-2">
                <div class="font-bold mb-10">
                    {{ day.day }} {{ day.month }}
                </div>
                <div class="overflow-auto max-h-72 scroll-px-9 h-screen bg-slate-100">
                    <div draggable="true" @dragstart="onDragstart($event, todo)" v-for="todo in todoStore.todos.filter(todo => todo.date == day.full)" v-bind:key="todo.id" class="draggable flex border shadow-sm p-2 rounded-lg w-full bg-white mb-1 mt-1">
                        <button class="h-5 w-5 rounded-full border">
                        </button>
                        <div class="ml-3">
                            <div class="">
                                {{ todo.name }}
                            </div>
                            <div class="">
                                {{ todo.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
                                  
<script setup>
    import { defineProps } from 'vue'
    import { useTodoStore } from '@/store/todoModule';
    


    const todoStore = useTodoStore()

    function onDragstart(event, item){
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('itemId', item.id.toString())
    }
    function onDrop(event, day){
        const itemId = parseInt(event.dataTransfer.getData('itemId'))
        let findeTodo = todoStore.todos.find(todo => todo.id === itemId)
        findeTodo.date = day.full
    }


    const props = defineProps({
        weekArray: {
            type: Array
        }
    })
</script>

<style>

</style>