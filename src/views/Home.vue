<template>
  <div>
    <div class="flex flex-col items-center p-8 justify-center">
      <!-- <MealsByName /> -->

      <div class="mt-2 flex justify-center gap-2 space-x-2">
        <router-link
          :to="{ name: 'byLetter', params: { letter } }"
          v-for="letter of letters"
          :key="letter"
        >
          {{ letter }}
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import MealsByName from "./MealsByName.vue";

const meals = computed(() => store.state.meals);
const letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
  ","
);
const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");

  console.log(response.data);
  ingredients.value = response.data.meals;
});
</script>
