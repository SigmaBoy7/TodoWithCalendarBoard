<template>
  <div class="app">
    <HeaderItem @update="showSideBar"></HeaderItem>
    <SideBar :class="{'-translate-x-60': !sideBarStatus}" :show="sideBarStatus"></SideBar>
    <main class="h-full">
      <div class="pt-20">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
  import HeaderItem from "@/components/HeaderItem"
  import SideBar from "./components/SideBar";
  import { ref } from "vue";

  let sideBarStatus = ref(false)

  const showSideBar = async() => {
    sideBarStatus.value = !sideBarStatus.value
  }
</script>

<style>

</style>
