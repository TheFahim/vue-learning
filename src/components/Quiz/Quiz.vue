<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
  import QuizHeader from './QuizHeader.vue';
  import QuizQuestion from './QuizQuestion.vue';
  import QuizFooter from './QuizFooter.vue';
import { provide } from 'vue';

  let props = defineProps({
    quiz: Object
  });

  provide('quiz', props.quiz);

</script>

<template>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter />
</template>
