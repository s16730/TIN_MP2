<template>
  <div :class="`field field--autocomplete`">
    <label class="field__label">
      <span class="field__label__text visually-hidden">
        {{ label }}
      </span>
      <input class="field__label__input"
             :placeholder="label"
             :name="fieldName"
             type="text"
             :value="defaultValue"
      >
      <ErrorField :name="fieldName"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ErrorField from "@/components/form/ErrorField.vue";


export default Vue.extend({
  name: "FieldInput",
  props: {
    label: String,
    fieldName: String,
    defaultValue: {
      type: String,
      default: "",
    }
  },
  components: {
    ErrorField
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
