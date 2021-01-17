<template>
  <div class="field field--submit">
    <input class="field__input button"
           type="submit"
           :value="label"
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "FieldSubmit",
  props: {
    label: String,
  }
});
</script>

<style scoped
       lang="scss"
>

</style>
