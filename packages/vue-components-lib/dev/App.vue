<script setup lang="ts">
import PersonName from '../src/components/PersonName.vue';
</script>

<template>
  <main>
    <PersonName :person="{firstName: 'test', lastName: 'tst'}"></PersonName>
  </main>
</template>
