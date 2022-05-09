import { defineStore } from "pinia";

export const useConverterStore = defineStore({
  id: "Converter",
  state: () => ({
    Euros: 0,
    Rubles: 0,
  }),

  persist: true,

  getters: {
    getEuros: (state) => state.Euros * 72.85,
    getRubles: (state) => state.Rubles * 0.014,
  },
  actions: {
  },
});
