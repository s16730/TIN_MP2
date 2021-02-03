<template>
  <div :class="`component component--{name}`"
  >
    <section class="section section--book">
      <div class="container book book--full">
        <div class="shelf-actions">
          <button v-for="shelf of shelves"
                  :key="shelf.id"
                  @click="toggleOnShelf(shelf)"
                  :ref="`shelf${shelf.id}`"
          >
            {{ getIsOnShelf(shelf) }} {{ shelf.name }}
          </button>
        </div>
        <div v-if="$store.state.currentUser && $store.state.currentUser.hasContentEditPermission">
          <router-link :to="`/book/${book.id}/edit`">
            {{ $t('book.edit') }}
          </router-link>
        </div>
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
              {{ $t('book.author') }}:
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
import { DataService } from "@/services/DataService";
import { Book, BookResponse, Shelf, ShelfListResponse } from "@/types";

export default Vue.extend({
  name: "BookView",
  data() {
    return {
      placeholderImage,
      book: {} as Book,
      authorSimilar: [] as Book[],
      shelves: [] as Shelf[],
    }
  },
  beforeRouteEnter(to, from, next) {
    const book = DataService.instance.getBook(to.params.id);

    book.then(data => {
      next((vm: any) => {
        vm.setBookData(data)
        if (vm.$store.state.currentUser) {
          const shelves = DataService.instance.getAllShelves().then(data => vm.setShelvesData(data))
        }
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    DataService.instance.getBook(to.params.id).then(data => {
      this.setBookData(data)
      this.$forceUpdate()

      console.log(data)
      console.log(this)

      if (this.$store.state.currentUser) {
        DataService.instance.getAllShelves().then(data => this.setShelvesData(data))
      }
    });
  },
  methods: {
    setBookData(data: BookResponse): void {
      this.book = data.book;
      this.authorSimilar = data.authorSimilar;
    },
    setShelvesData(data: ShelfListResponse): void {
      this.shelves = data.shelves;
    },
    toggleOnShelf(shelf: Shelf) {
      if (this.isOnShelf(shelf)) {
        DataService.instance.RemoveFromShelf(this.book, shelf).then(() => {
          shelf.books = shelf.books.filter(bookOnShelf => bookOnShelf.book.id !== this.book.id)
          let elem: HTMLElement = this.$refs[`shelf${shelf.id}`] as HTMLElement

          if (Array.isArray(elem)) {
            elem = elem[0]
          }
          elem.innerText = elem.innerText.replace(/[+-]/, this.getIsOnShelf(shelf))
        })
      } else {
        DataService.instance.AddToShelf(this.book, shelf).then(() => {
          shelf.books.push({
            shelf: shelf,
            book: this.book,
          });
          let elem: HTMLElement = this.$refs[`shelf${shelf.id}`] as HTMLElement

          if (Array.isArray(elem)) {
            elem = elem[0]
          }

          elem.innerText = elem.innerText.replace(/[+-]/, this.getIsOnShelf(shelf))
        });
      }
    },
    isOnShelf(shelf: Shelf) {

      return shelf.books.filter(bookOnShelf => bookOnShelf.book.id === this.book.id).length > 0;
    },
    getIsOnShelf(shelf: Shelf) {
      return this.isOnShelf(shelf) ? "-" : "+"
    },
  }
});
</script>

<style scoped
       lang="scss"
>

</style>
