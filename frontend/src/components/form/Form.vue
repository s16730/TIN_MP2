<template>
  <form class="form"
        :data-url="dataUrl"
        @submit.prevent="submit"
        ref="form"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { DataObject } from "@/types";


export default Vue.extend({
  name: "Form",
  props: {
    dataUrl: String,
  },
  methods: {
    submit() {
      const data: DataObject = {};
      const formData = new FormData(this.$refs.form as HTMLFormElement);

      formData.forEach(((value, key) => data[key] = value));

      this.$store.dispatch("submitForm", {
        url: this.dataUrl,
        data: data,
      })

      console.log(this.$refs.form)
    }
  }
});
</script>

<style scoped
       lang="scss"
>

</style>
