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
             v-model="model"
             @input="$emit('input', model)"
      >
    </label>
    <ErrorField :name="fieldName"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ErrorField from "@/components/form/ErrorField.vue";


export default Vue.extend({
  name: "FieldInput",
  props: {
    type: String,
    label: String,
    fieldName: String,
    defaultValue: {
      type: String,
      default: "",
    },
    dataValidate: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      model: this.defaultValue,
    }
  },
  components: {
    ErrorField
  },
});
</script>

