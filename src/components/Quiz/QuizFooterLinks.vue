<script setup>
import { inject } from 'vue';

let quiz = inject('quiz');

</script>


<template>
  <h5>{{ quiz.name }}</h5>
  <div>
    <a href="#" style="padding-right: 2em;">Hello</a>
    <a href="#">Hi</a>
  </div>
</template>
