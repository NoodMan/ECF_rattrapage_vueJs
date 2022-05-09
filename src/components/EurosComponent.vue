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
        <td>{{this.Euros}}  {{this.symbEuros}}</td>
        <td>=</td>
        <td>{{this.getEuros}}  {{this.symbRubles}}</td>
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
    ...mapState(useConverterStore, ["getRubles", "getEuros", "Euros" ,"Rubles" ,"symbRubles", "symbEuros"]),
  },
};
</script>

<style>

</style>