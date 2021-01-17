<template>
  <div :class="`component component--${name}`">
    <section class="section section--book">
      <div class="container book book--full">
        <div class="book__cover">
          <img :src="placeholderImage"
               :alt="book.title"
          >
        </div>
        <div class="book__info">
          <h1 class="book__info__title">
            {{ book.title }}
          </h1>
          <div class="book__info__author">
            <span>
              {{ $('book.author') }}:
            </span>

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
          <div class="book__info__isbn">
            <span>
              {{ $t('book.isbn') }}
            </span>
            {{ book.isbn }}
          </div>
        </div>
        <div class="book__description">
          <span class="fw-700 book__description__header">
              {{ $t('book.description') }}
          </span>
          <p>
            {{ book.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="section section--other-books"
             v-if="authorSimilar.length > 0"
    >
      <div class="container">
        <h2>
          <template v-if="book.authors.length > 1">
            {{ $t('book.similar.plural') }}
          </template>
          <template v-else>
            {{ $t('book.similar.singular') }}
          </template>
        </h2>
        <div class="list list--block">
          <div v-for="book of authorSimilar"
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

export default Vue.extend({
  name: "BookView",
  data() {
    return {
      placeholderImage,
      book: {}, //todo
      authorSimilar: [],
    }
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
