<script setup>
import { state } from '../../stores/quizStore';


</script>


<template>
  <h5>{{ state.name }}</h5>
  <button @click="state.name = 'A New Quiz Name'">Chanage Quiz Name</button>
  <div>
    <a href="#" style="padding-right: 2em;">Hello</a>
    <a href="#">Hi</a>
  </div>
</template>
