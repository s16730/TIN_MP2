<template>
  <div v-if="message && message.length > 0"
       class="global-message"
       @click="hide"
  >
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { Mutation } from "@/const/Mutation";


export default Vue.extend({
  name: "GlobalMessage",
  computed: {
    ...mapState({
      message(): boolean {
        return this.$store.state.globalMessage;
      },
    }),
  },
  methods: {
    hide() {
      this.$store.commit(Mutation.ClearGlobalMessage)
    }
  }
});
</script>

<style scoped
       lang="scss"
>
.global-message {
  position: fixed;
  top: 15px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 400px;

  max-width: 100%;
  padding: 15px;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
