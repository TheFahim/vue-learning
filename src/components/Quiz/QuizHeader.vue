<script setup>
import { inject } from 'vue';

let {name, changeName} = inject('name');
</script>

<template>
  <h1>{{ name }}</h1>
</template>
