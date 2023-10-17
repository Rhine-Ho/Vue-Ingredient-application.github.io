<template>
  <a :href="href" 
  target="_blank" 
  class="px-3 py-2 text-white rounded-lg border-2 shadow-md bg-red-500 hover:bg-red-600 transition-colors">
  YouTube
  </a>

</template>

<script setup>
const props = defineProps({
href: String
})
</script>
