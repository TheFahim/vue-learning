<script setup>

import { useStorage } from "../composables/useStorage"

let food = useStorage('food')

let age = useStorage('age');

let obj = useStorage('obj', {one: 'one'});

setTimeout(() =>{
  obj.value.one = 'Changed';
},3000);

</script>

<template>
  <main>
    <p>
       what is Your Favorite Food? <input type="text" v-model="food">
    </p>

    <p>
       how old are you? <input type="text" v-model="age">
    </p>

  </main>
</template>
