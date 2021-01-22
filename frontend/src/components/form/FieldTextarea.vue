<template>
  <div class="field field--textarea">
    <label class="field__label">
      <span class="field__label__text">
        {{ label }}
      </span>
      <textarea class="field__label__input"
                :name="fieldName"
                v-model="model"
                @input="$emit('input', model)"
      >
      </textarea>
      <ErrorField :name="fieldName"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ErrorField from "@/components/form/ErrorField.vue";


export default Vue.extend({
  name: "FieldTextarea",
  props: {
    label: String,
    fieldName: String,
    defaultValue: {
      type: String,
      default: "",
    }
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

<style scoped
       lang="scss"
>

</style>
