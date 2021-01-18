<template>
  <div :class="`component component-${name}`">
    <section class="section section--authors">
      <div class="container">
        <h1>
          {{ $t('author.authors') }}
        </h1>
        <div class="list list--block">
          <router-link v-for="author of authors"
                       :key="author.id"
                       class="list__item author author--list-item"
                       :to="`/author/${author.id}`"
          >
            <img class="author__thumbnail"
                 :src="placeholderImage"
                 :alt="author.name + ' ' + author.surname"
            >
            <span class="author__name">
              {{ author.name }} {{ author.surname }}
            </span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import placeholderImage from "@/assets/960x960.png";
import { DataService } from "@/services/DataService";
import { Author } from "@/types";

export default Vue.extend({
  name: "AuthorsView",
  data() {
    return {
      placeholderImage,
      authors: [] as Author[],
    }
  },
  beforeRouteEnter() {
    DataService.instance.getAllAuthors().then(data => this.authors = data.authors);
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
