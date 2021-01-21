<template>
  <div :class="`component{ component--{name}`"
       :key="shelf.id"
  >
    <section class="section section--shelf">
      <div class="container shelf shelf--full">
        <div class="actions actions--shelf">
          <router-link class="actions__action"
                       :to="`/shelf/${shelf.id}/edit`"
          >
            {{ $t('shelf.edit') }}
          </router-link>
        </div>

        <h1>
          {{ shelf.name }}
        </h1>
        <span class="shelf__count">
          {{ $t('shelf.positions', {number: shelf.books.length}) }}
        </span>

        <div class="list list--block">
          <div v-for="book of books"
               :key="book.id"
               class="list__item book book--list-item"
          >
            <img class="book__thumbnail"
                 :src="placeholderImage"
                 :alt="book.title"
            >
            <router-link class="book__title"
                         :to="`/book/${book.id}`"
            >
              {{ book.title }}
            </router-link>
            <template v-if="book.authors && Array.isArray(book.authors)">
              <router-link v-for="bookAuthor of book.authors"
                           :key="bookAuthor.id"
                           class="book__author"
                           :to="`/author/${bookAuthor.id}`"
              >
                {{ bookAuthor.name }} {{ bookAuthor.surname }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import placeholderImage from "@/assets/960x960.png";
import { DataService } from "@/services/DataService";
import { Book, BookResponse, ShelfResponse } from "@/types";


export default Vue.extend({
  name: "ShelfView",
  data: function () {
    return {
      placeholderImage,
      shelf: {},
      books: [] as Book[],
    }
  },
  beforeRouteEnter(to, from, next) {
    DataService.instance.getShelf(to.params.id).then(data => {
      next((vm: any) => vm.setData(data));
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.shelf = {};
    this.books = [];
    DataService.instance.getShelf(to.params.id).then(data => {
      this.setData(data)
      next()
    })
  },
  methods: {
    setData(data: ShelfResponse): void {
      this.shelf = data.shelf;
      this.books = data.books;
    }
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
