<template>
    <div class=" px-5 m-auto h-full">
        <CalendarView
        :weekArray="currentWeek"
        @update:weekArrayForward="currentWeek = getWeek(dateNow.add(1, 'week'))"
        @update:weekArrayBack="currentWeek = getWeek(dateNow.subtract(1, 'week'))"
        @update:weekArrayReload="currentWeek = getWeek(baseDay)"
        />
        <TodosBoard
        class="mt-10 h-full"
        :weekArray="currentWeek"
        />
    </div>
</template>

<script setup>
    import CalendarView from '@/components/CalendarView';
    import TodosBoard from '@/components/TodosBoard';
    import { getWeek } from '@/utils/getWeek.js'
    import { useTodoStore } from '@/store/todoModule';
    import { ref } from 'vue';
    import moment from 'moment';

    const todoStore = useTodoStore()

    const baseDay = moment(todoStore.userDate)

    const dateNow = ref(moment(todoStore.userDate))
    
    const currentWeek = ref(getWeek(dateNow))

</script>

<style>
</style>