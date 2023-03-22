<script setup>
import { counter } from '../stores/CounterStore';

</script>

<template>
  <div>
    <p>
      About Page. The Current Counter Page is {{ counter.count }}
    </p>
  </div>
</template>
