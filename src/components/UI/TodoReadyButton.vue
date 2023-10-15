<template>
    <button class="flex items-center justify-center rounded-full border-4 w-6 h-6 hover:bg-orange-200 transition-colors">
        <span class="absolute h-5 w-5 top-0 left-0 rounded-full border-4 overflow-hidden"></span>
        <svg class="absolute inline-block opacity-0 hover:opacity-100 transition-opacity" width="24" height="24"><path fill="currentColor" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        <span class="absolute h-5 w-5 top-0 left-0 rounded-full border-4"></span>
    </button>
</template>

<script>
export default {
    name: 'todo-ready-button'
}
</script>

<style>

</style>