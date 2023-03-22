<script setup>
import { useCounterStore } from '../stores/CounterStore';

let counter = useCounterStore();
</script>


<template>
  <h1>{{ counter.count }}</h1>
  <button
  @click="counter.increment()"
    :disabled="! counter.remaining"
    >Increment ({{ counter.remaining }} remaining)</button>
</template>
