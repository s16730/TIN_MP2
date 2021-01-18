<template>
  <div :class="`component--${name}`">
    <section class="section section--author">
      <% if (message) { %>
      <span>
            <%= message %>
        </span>
      <% } %>
      <form class="form form--author"
            :data-url="dataUrl"
            @submit.prevent="submit"
      >
        <h1 class="visually-hidden">
          {{ $t('author.add') }}
          {{ $t('author.edit') }}
        </h1>
        <div class="container author author--full">
          <div class="author__photo">
            <img :src="authorImg"
                 :alt="'' || data.name"
            >
          </div>
          <div class="author__info">
            <FieldInput field-name="name"
                        :label="$t('author.name')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.name : ''"
            />
            <FieldInput field-name="surname"
                        :label="$t('author.surname')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.surname : ''"
            />
          </div>
          <div class="author__description">
            <FieldTextarea name="bio"
                           :label="$t('author.bio')"
                           :default-value="data ? data.bio : ''"
            />
          </div>
          <FieldSubmit :label="$t('save')"/>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldTextarea from "@/components/form/FieldTextarea.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import image from "@/assets/960x960.png";
import { DataService } from "@/services/DataService";

export default Vue.extend({
  name: "EditAuthorView",
  data() {
    return {
      authorImg: image,
      data: {}//todo
    }
  },
  beforeRouteEnter() {
  },
  methods: {
    submit() {
      console.log(arguments)
    }
  },
  computed: {
    dataUrl(): string {
      return this.data ? `/author/${this.data.id}/edit` : `/author/add`;
    }
  },
  components: {
    FieldInput,
    FieldSubmit,
    FieldTextarea,
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
