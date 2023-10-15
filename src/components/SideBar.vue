<template>
    <nav class="sidebar fixed min-h-screen w-60 bg-orange-200 p-5 mt-10 transition-transform z-10">
        <button @click="$router.push('/')" class="text-green-700 block px-4 py-2 text-sm hover:bg-orange-300 w-52 rounded-lg">
            <svg-button class="dropdown-item__delete">
                <template v-slot:svg>
                    <svg width="34" height="34" viewBox="0 0 24 24" class="ONBJEQtK++jnfUWJ3V90Dw=="><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)" font-weight="500"><tspan x="8" y="15" text-anchor="middle">17</tspan></text></g></svg>                    </template>
                <template v-slot:text><span class="text-base text-gray-900">Сегодня</span></template>
            </svg-button>
        </button>
        <button @click="$router.push('/upcoming')" class=" text-violet-500 block px-4 py-2 text-sm hover:bg-orange-300 w-52 rounded-lg">
            <svg-button class="dropdown-item__delete">
                <template v-slot:svg>
                    <svg width="34" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="SWWJ2mDmoJ5jpYGsCY5nBA=="><g fill="currentColor" fill-rule="nonzero"><path d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z" opacity="0.1"></path><path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path></g></svg>
                </template>
                <template v-slot:text><span class="text-base text-gray-900">Предстояшее</span></template>
            </svg-button>
        </button>
    </nav>
</template>

<script setup>
</script>

<style>

</style>