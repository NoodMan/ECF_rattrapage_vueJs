<template>
  <div>
    <h2>It's your turn have fun €-₽ or ₽-€ 🧐</h2>
    <br>
    <p>
      Thanks to my converter you can convert euros into rubles and rubles into
      euros with the following exchange rate:
      <center>
        Euro -> Ruble : 0.0137
        <br>
        Ruble -> Euro : 72.8192
      </center>
    </p>
    <br>
    <form @submit.prevent="SubmitEuro">
      <h4>Amount in Euros-евро to be converted</h4>
      <input
        type="number"
        v-model="Euros"
        placeholder="Euros-евро to be converted"
        min="1"
        max="1 000 000 000"
      />
      <br>
      <br>
      <input type="submit" value="Conversion/конверсия" />
      <br>
    </form>
    <br>
    <center>
    <div v-if="Euro">
      <EurosComponent />
    </div>
    </center>
    <br>
    <form @submit.prevent="SubmitRuble">
      <h4>Amount in Ruble-рубль to be converted</h4>
      <input
        type="number"
        v-model="Rubles"
        placeholder="Ruble-рубль to be converted"
        min="1"
        max="1 000 000 000"
      />
      <br>
      <br>
      <input type="submit" value="конверсия/Conversion" />
    </form>
    <br>
    <center>
    <div v-if="Ruble">
      <RublesComponent />
    </div>
    </center>
  </div>
</template>

<script>
import EurosComponent from "../components/EurosComponent.vue";
import RublesComponent from "../components/RublesComponent.vue";
import { useConverterStore } from "../stores/ConverterStore";
import { mapWritableState } from "pinia";

export default {
  components: { EurosComponent, RublesComponent },

  computed: {
    ...mapWritableState(useConverterStore, [
      "Rubles",
      "Euros",
    ]),
  },
  data() {
    return {
      T: false,
      P: false,
      Euros: Number,
      Rubles: Number,
    };
  },
  methods: {
    SubmitEuro() {
      this.Euro = true;
      this.Euros = this.Euros;
    },
    SubmitRuble() {
      this.Ruble = true;
      this.Rubles = this.Rubles;
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
  color: brown;
}
form {
  text-align: center;
}
input {
  border-radius: 12px;
}

</style>