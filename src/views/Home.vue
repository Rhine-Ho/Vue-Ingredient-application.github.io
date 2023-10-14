<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../stores'
import axiosClient from '../axiosClient'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])
onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)
  ingredients.value = response.data
})
</script>

<template>
  <div class="flex flex-col p-8 justify-center">
    <div class="flex justify-center gap-1 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
