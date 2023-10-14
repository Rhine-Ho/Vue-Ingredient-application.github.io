<script setup>
    
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const meal = ref({});

    onMounted(async () => {
  try {
    const response = await axiosClient.get(`lookup.php?i=${route.params.id}`);
    meal.value = response.data.meals[0];
  } catch (error) {
    console.error('Error fetching meal details:', error);
  }
});

</script>

<template>
    <div>
     <pre>{{ meal }}</pre>
    </div>
  </template>
  
  
  