<script setup>
import { inject } from 'vue';

  defineProps({
    quiz: Object
  });

  let {name, changeName} = inject('name');


</script>


<template>
  <button @click="changeName">{{ name }}</button>
  <div>
    <a href="#" style="padding-right: 2em;">Hello</a>
    <a href="#">Hi</a>
  </div>
</template>
