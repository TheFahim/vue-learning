<script setup>
import QuizFooterLinks from './QuizFooterLinks.vue';

defineProps({
  quiz: Object
});

</script>

<template>
  <h1>Footer</h1>
  <QuizFooterLinks :quiz="quiz"/>
</template>
