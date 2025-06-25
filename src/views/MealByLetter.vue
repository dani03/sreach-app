<template>
  <div class="flex flex-col items-center p-8 justify-center">
    <h1 class="text-2xl font-bold mb-4">Meals by Letter</h1>

    <div class="mt-2 flex flex-wrap justify-center items-center space-x-2">
      <router-link
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        @click="letterChoised(letter)"
        :class="[
          'border-2 rounded-md px-4 py-2 cursor-pointer transition-all duration-200',
          selectedLetter === letter
            ? 'bg-red-500 text-white border-red-500'
            : 'text-blue-500 border-gray-200 hover:bg-blue-100'
        ]"
      >
        {{ letter }}
      </router-link>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8">
      <MealItem v-for="meal of meals" :meal="meal" :key="meal.idMeal" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import store from "../store";

const route = useRoute();
const letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");

const selectedLetter = ref(route.params.letter || "");

const meals = computed(() => store.state.sreachedMealsByletter);

function letterChoised(letter) {
  selectedLetter.value = letter;
  store.dispatch("searchMealsByFirstLetter", letter);
}

watch(
  () => route.params.letter,
  (newLetter) => {
    selectedLetter.value = newLetter || "";
    if (newLetter) {
      store.dispatch("searchMealsByFirstLetter", newLetter);
    }
  },
  { immediate: true }
);
</script>
