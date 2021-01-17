<template>
  <div :class="`field field--${type}`">
    <label class="field__label">
      <span class="field__label__text visually-hidden">
        {{ label }}
      </span>
      <input class="field__label__input"
             :placeholder="label"
             :name="fieldName"
             :type="type"
             :value="defaultValue"
      >
      <!--             :data-validate="required length"-->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "FieldInput",
  props: {
    type: String,
    label: String,
    fieldName: String,
    defaultValue: {
      type: String,
      default: "",
    }
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
