<template>
  <div :class="`component--${name}`">
    <section class="section section--author">
      <div class="container author author--full">
        <div class="author__photo">
          <img :src="placeholderImage"
          >
        </div>
        <div class="author__info">
          <h1 class="author__info__name">
            {{ author.name }} {{ author.surname }}
          </h1>
        </div>
        <div class="author__description">
          <p>
            {{ author.bio }}
          </p>
        </div>
      </div>
    </section>


    <section v-if="books.length > 0"
             class="section section--other-books"
    >
      <div class="container">
        <h2>
          {{ $t('author.otherBooks') }}
        </h2>
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
import { Book } from "@/types";


export default Vue.extend({
  name: "AuthorView",
  data() {
    return {
      placeholderImage,
      author: {},
      books: [] as Book[],
    }
  },

  beforeRouteEnter() {
    DataService.instance.getAuthor(this.$route.params.id).then(data => {
      this.author = data.author;
      this.books = data.books;
    });
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
