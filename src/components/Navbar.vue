<template>
  <header class="bg-white shadow-md flex justify-between items-stretch">
    <div class="p-4 flex justify-between w-full">
      <RouterLink
        :to="{ name: 'home' }"
        class="text-2xl font-bold text-gray-800 inline-flex px-5 items-center"
      >
        home
      </RouterLink>
      <div class="h-full space-x-1.5">
        <router-link
          :to="{ name: 'byMeal', params: { meal: '' } }"
          class="hover:bg-purple-100 transition-colors border-1 border-gray-100 p-2 border-rounded-md bg-purple-400"
        >
          sreach meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter', params: { letter: 'A' } }"
          class="hover:bg-purple-100 transition-colors border-1 border-gray-100 p-2 border-rounded-md bg-purple-400"
        >
          meals by letters
        </router-link>
        <router-link
          :to="{ name: 'byIngredient', params: { ingredient: 'ingredient' } }"
          class="hover:bg-purple-100 transition-colors border-1 border-gray-100 p-2 border-rounded-md bg-purple-400"
        >
          meals by ingredients
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
