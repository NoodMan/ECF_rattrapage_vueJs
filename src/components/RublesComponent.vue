<template>
<div>
    <table>
    <thead>

        <tr>
        <th scope="col">Rubles</th>
        <th scope="col"></th>
        <th scope="col">Euros</th>
        </tr>

    </thead>
    <tbody>

        <tr>
        <td>{{this.Rubles}}  {{this.symbRubles}}</td>
        <td>=</td>
        <td>{{this.getRubles}}  {{this.symbEuros}}</td>
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