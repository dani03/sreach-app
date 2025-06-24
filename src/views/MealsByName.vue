<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full p-4"
      placeholder="sreach for meals"
      @change="getOnSrearch"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow-md rounded-xl"
      >
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl h-48 w-full object-cover"
        />
        <h2 class="p-4 text-xl font-bold">{{ meal.strMeal }}</h2>
        <!-- <h3 class="p-3 py-2 font-semibold">{{ meal.strInstructions }}</h3> -->

        <div class="p-4 flex justify-between items-center">
          <a
            :href="meal.strSource"
            target="_blank"
            class="border-2 border-gray-200 rounded-md px-4 py-2 text-blue-500 hover:bg-blue-100"
            >Youtube</a
          >
          <router-link
            :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            target="_blank"
            class="text-blue-500  border-2 border-gray-200 cursor-pointer rounded-md px-4 py-2 hover:bg-blue-100"
            >Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();

const keyword = ref("");
const meals = computed(() => store.state.sreachedMeals);

function getOnSrearch() {
  store.dispatch("sreachMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.meal;
  if (keyword.value) {
    getOnSrearch();
  }
});
</script>
