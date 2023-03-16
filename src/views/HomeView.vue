<script setup>
import TheWelcome from '../components/TheWelcome.vue';


  // eslint-disable-next-line no-undef
  let message = $ref("Hello world");

  setTimeout(() => {
    message = "I have bee changed";
  }, 2000);

</script>

<template>
  <main>
    <TheWelcome />
   <p> {{ message }}</p>
   <p>
    <input type="text" v-model="message">
   </p>

  </main>
</template>
