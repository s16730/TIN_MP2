<template>
  <div class="field field--textarea">
    <label class="field__label">
      <span class="field__label__text">
        {{ label }}
      </span>
      <textarea class="field__label__input"
                :name="fieldName"
      >
        {{ defaultValue }}
      </textarea>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "FieldTextarea",
  props: {
    label: String,
    fieldName: String,
    defaultValue: {
      type: String,
      default: "",
    }
  }
});
</script>

<style scoped
       lang="scss"
>

</style>
