<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <RouterLink :to="{ name: 'home' }" class="inline-flex items-center h-full px-5">
      Home
    </RouterLink>
    <div class="flex items-center gap-3">
      <RouterLink
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-gray-400"
      >
        Search Meals
      </RouterLink>
      <RouterLink
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-gray-400"
      >
        Meals By Letter
      </RouterLink>
      <RouterLink
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-gray-400"
      >
        Meals By Ingredients
      </RouterLink>
    </div>
  </header>
</template>
