//sauvegarde les données quelque part (BDD, json, etc.)
// Permet de modifier l'état de l'application
export function setSreachMeals(state, meals) {
  state.sreachedMeals = meals;
}

export default {
  setSreachMeals,
};
