<template>
  <div>
    <h1>home view</h1>
    <div class="flex flex-col items-center p-8 justify-center">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full p-4"
        placeholder="sreach for meals"
      />

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
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const meals = computed(() => store.state.meals);
const letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
  ","
);
onMounted( async () => {
  const response = await axiosClient.get('/list.php?i=list')

  console.log(response.data)
})
</script>
