<template>
  <div :class="`component component--${name}`">
    <section class="section section--shelves">
      <div class="container">
        <h1>
          {{ $t('shelf.plural') }}
        </h1>
        <div class="list list--list">
          <template v-for="shelf of shelves"
                    :key="shelf.id"
          >
            <router-link class="list__item shelf shelf--list-item"
                         :to="`/shelf/${shelf.id}`"
            >
              <img class="shelf__icon"
                   :src="placeholderImage"
                   :alt="shelf.name"
              >
              <span class="shelf__name">
                {{ shelf.name }}
              </span>
              <span class="shelf__count">
                {{ $t('shelf.positions', {number: shelf.books.length}) }}
              </span>
            </router-link>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import placeholderImage from "@/assets/960x960.png";
import { DataService } from "@/services/DataService";
import { Shelf } from "@/types";


export default Vue.extend({
  name: "ShelvesView",
  data() {
    return {
      placeholderImage,
      shelves: [] as Shelf[],
    }
  },
  beforeRouteEnter() {
    DataService.instance.getAllShelves().then(data => this.shelves = data.shelves);
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
