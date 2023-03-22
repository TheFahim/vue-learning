<script setup>

import { ref } from 'vue';
import Quiz from '../components/Quiz/Quiz.vue';

let comment = ref('test value');

setTimeout(()=>{
  comment.value = 'changed';
},5000);
</script>

<template>
  <main>
    <Quiz :quiz="{name: 'My First Quiz',questions: []}" />
  </main>
</template>
