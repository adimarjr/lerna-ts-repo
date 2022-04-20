<script setup lang="ts">
import { PropType } from 'vue';
import { IPerson } from '@adimarjr/my-entities';

defineProps({
  person: {
    type: Object as PropType<IPerson>,
    required: true,
    default: {
      firstName: '',
      lastName: ''
    }
  },
})
</script>

<template>
    <div>Name: {{person.firstName}} {{person.lastName}}</div>
    <span>Test change</span>
</template>