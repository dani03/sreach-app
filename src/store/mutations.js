//sauvegarde les données quelque part (BDD, json, etc.)
// Permet de modifier l'état de l'application
export function setSreachMeals(state, meals) {
  state.sreachedMeals = meals;
}

 const  setSreachMealsByletter = (state, meals) => {
  state.sreachedMealsByletter = meals;
};

export default {
  setSreachMeals,
  setSreachMealsByletter,
};
