<template>
  <div>
    <tr>
      <th>Euros </th>
      <th> </th>
      <th> ===></th>
      <th>Rubles</th>
    </tr>

    <tr>
      <td>{{ this.Euros }} €</td>
      <td> = </td>
      <td>{{ this.getEuros }} ₽</td>
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