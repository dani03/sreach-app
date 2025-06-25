import axiosClient from "../axiosClient";

export function sreachMeals({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setSreachMeals", data.meals);
  });
}

export function searchMealsByFirstLetter({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
    //on appelle la mutation
    commit("setSreachMealsByletter", data.meals);
  });
}

export default {
  sreachMeals,
  searchMealsByFirstLetter,
};
