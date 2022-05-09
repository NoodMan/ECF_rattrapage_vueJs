<template>
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col">Euros</th>
          <th scope="col"></th>
          <th scope="col">Rubles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ this.Euros }} €</td>
          <td> =  </td>
          <td>{{ this.getEuros }} ₽</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useConverterStore } from "../stores/ConverterStore";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useConverterStore, [
      "getRubles",
      "getEuros",
      "Euros",
      "Rubles",
    ]),
  },
};
</script>

<style>
</style>