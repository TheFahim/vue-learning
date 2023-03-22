<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
  import QuizHeader from './QuizHeader.vue';
  import QuizQuestion from './QuizQuestion.vue';
  import QuizFooter from './QuizFooter.vue';
  import { provide, ref } from 'vue';

  let name = ref('John Doe')

  provide('name', {
    name,
    changeName: ()=> name.value = "Changed"
  });

  defineProps({
    quiz: Object
  });
</script>

<template>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter :quiz="quiz"/>
</template>
