<template>
  <div>
    <tr>
      <th>Rubles</th>
      <th> </th>
      <th> ===> </th>
      <th>Euros</th>
    </tr>

    <tr>
      <td>{{ this.Rubles }} ₽</td>
      <td> = </td>
      <td>{{ this.getRubles.toFixed(2) }} €</td>
    </tr>
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
tr {
  font-size: 25px;
  color: rgb(225, 22, 96);
}
</style>