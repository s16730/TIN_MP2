<template>
  <div :class="`component component--${name}`">
    <section v-if="books"
             class="section section--books section--background-light"
    >
      <div class="container">
        <h1>
          {{ $t('books.popular') }}
        </h1>
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

    <section v-if="authors && Array.isArray(authors) && authors.length > 0"
             class="section section--authors"
    >
      <div class="container">
        <h1>
          {{ $t('authors.popular') }}
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

export default Vue.extend({
  name: "BooksView",
  data() {
    return {
      placeholderImage,
      books: [],
      authors: [],//todo
    };
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
