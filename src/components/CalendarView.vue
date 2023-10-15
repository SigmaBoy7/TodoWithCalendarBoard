<template>
    <div class="calendar flex flex-col">
        <div class="calendar__upcoming flex justify-between">
            <div class="calendar__month text-xl">
                {{ props.weekArray.at(1).month }}
            </div>
            <div class="calendar__upcoming-left flex items-center">
                <div class="arrows self-end">
                    <button class="arrow__left border" @click="$emit('update:weekArrayBack')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" fill-rule="nonzero" d="m10.707 12 3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L10.707 12z"></path></g></svg>
                    </button>
                    <button class="arrow__right border" @click="$emit('update:weekArrayForward')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path d="M0 24V0h24v24z"></path><path fill="currentColor" fill-rule="nonzero" d="M13.293 12 9.646 8.354a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 12z"></path></g></svg>
                    </button>
                </div>
                <button @click="$emit('update:weekArrayReload')" class="calendar__today-button ml-3 border p-1 bg-orange-500 rounded-lg text-sm">
                    Today
                </button>
            </div>
        </div>
        <div class="calendar__weeks mt-8">
            <div class="calendar__week flex border-b-2 justify-between">
                <div :class="{'text-gray-300': isDateBeforeUserDate(week.full)}" v-for="week in props.weekArray" v-bind:key="week" class="calendar__spacer flex flex-col items-center w-24 text-center pt-2 pb-4">
                    <div class="calendar__spacer-month mt-2">{{ week.weekDay }}</div>
                    <div class="calendar__spacer-day mt-2">{{ week.day }}</div>
                    <div v-if="week.full == todoStore.userDate" class="h-2 w-2 rounded mt-3 bg-orange-500"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useTodoStore } from '@/store/todoModule';

    const todoStore = useTodoStore()

    const isDateBeforeUserDate = (date) => {
        const moment = require('moment');

        const calendarDate = moment(date)

        if (calendarDate.isBefore(todoStore.userDate)){
            return true    
        }else{
            return false
        }
    }
    const props = defineProps({
        weekArray: {
            type: Array,
            required: true
        }
    })

</script>

<style scoped>

</style>