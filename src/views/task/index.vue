<template>
  <div>
    <TaskList :taskList="taskList" />
    <FooterTabbar />
  </div>
</template>

<script setup lang="ts">
import TaskList from '@/components/list/TaskList.vue'
import FooterTabbar from '@/components/FooterTabbar.vue'
import { reactive } from 'vue';
const taskList=reactive([
  {id:1},
  {id:2}
])

</script>

<style scoped>

</style>
