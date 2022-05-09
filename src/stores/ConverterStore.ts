import { defineStore } from "pinia";

export const useConverterStore = defineStore({
  id: "Converter",
  state: () => ({
    Euros: 0,
    Rubles: 0,
    symbRubles: "₽",
    symbEuros: "€",
  }),

  persist: true,

  getters: {
    getEuros: (state) => state.Euros * 72.8192,
    getRubles: (state) => state.Rubles * 0.0137,
  },
  actions: {
  },
});
