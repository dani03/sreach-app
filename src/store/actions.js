import axiosClient from "../axiosClient";

export function sreachMeals({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setSreachMeals", data.meals);
  });
}

export default {
  sreachMeals,
};
