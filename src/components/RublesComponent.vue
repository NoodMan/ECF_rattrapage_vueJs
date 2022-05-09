<template>
  <div>
    <tr>
      <th scope="col">Rubles</th>
      <th scope="col"></th>
      <th scope="col">Euros</th>
    </tr>

    <tr>
      <td>{{ this.Rubles }} €</td>
      <td> =  </td>
      <td>{{ this.getRubles }} ₽</td>
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

</style>