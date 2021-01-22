<template>
  <div class="component error"
       v-if="errorMessage"
  >
    {{ errorMessage }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { ErrorObject } from "@/types";


export default Vue.extend({
  name: "ErrorField",
  props: {
    name: String,
  },
  data() {
    return {
      errorMessage: null as string | null,
    }
  },
  computed: {
    ...mapState({
      isErrorArrayChanged(): boolean {
        return this.$store.state.isValidFieldsChanged;
      },
    }),
  },
  watch: {
    isErrorArrayChanged() {
      const errors = this.$store.state.errors.filter((elem: ErrorObject) => elem.name === this.name);

      if (errors) {
        this.errorMessage = "";

        errors.forEach((error: ErrorObject) => {
          this.errorMessage += `${error.message} \n`
        })
      } else {
        this.errorMessage = null;
      }
    }
  }
});
</script>

<style scoped
       lang="scss"
>

</style>
