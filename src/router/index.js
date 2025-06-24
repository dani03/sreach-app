import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import SreachByIngredient from "../views/MealByIngredient.vue";
import MealsByName from "../views/MealsByName.vue";
import SreachByLetter from "../views/MealByLetter.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: SreachByLetter,
  },
  {
    path: "/ingredient/:ingredient",
    name: "byIngredient",
    component: SreachByIngredient,
  },
  {
    path: "/meals/:meal?",
    name: "byMeal",
    component: MealsByName,
  },
  {
    path: "/meals",
    name: "allMeals",
    component: MealList,
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: MealDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
