<template>
  <div :class="`component{ component--{name}`"
       :key="user.id"
  >
    <section class="section section--user  section--background-light">
      <h1 class="visually-hidden">
        {{ $t('user.details') }}
      </h1>
      <div class="container user user--full">
        <div class="actions actions--user">
          <router-link class="actions__action"
                       v-if="user.hasUserEditPermission || ($store.state.currentUser && user.id === $store.state.currentUser.id)"
                       :to="`/user/${user.id}/edit`"
          >
            {{ $t('user.edit') }}
          </router-link>
        </div>
        <div class="user__avatar">
          <img :src="personImage"
               :alt="user.username"
          >
        </div>
        <div class="user__info">
          <div class="user__info__username">
            <span>
              {{ $t('user.username') }}
            </span>
            <span>
              {{ user.username }}
            </span>
          </div>
          <div class="user__info__email">
            <span>
              {{ $t('user.email') }}
            </span>
            <span>
              {{ user.email }}
            </span>
          </div>
          <div class="user__info__creation-date">
            <span>
              {{ $t('user.creationDate') }}
            </span>
            <span>
              {{ user.createdOn }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--shelves">
      <div class="container">
        <h1>
          {{ $t('shelves.plural') }}
        </h1>
        <router-link to="/shelf/add"
        >
          {{ $t('shelf.create') }}
        </router-link>
        <div class="list list--list">
          <router-link v-for="shelf of shelves"
                       :key="shelf.id"
                       class="list__item shelf shelf--list-item"
                       :to="`/shelf/${ shelf.id }`"
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
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import placeholderImage from "@/assets/960x960.png";
import personImage from "@/assets/person.png";
import { DataService } from "@/services/DataService";
import { FullUserResponse, Shelf, UserResponse } from "@/types";
import { Mutation } from "@/const/Mutation";


export default Vue.extend({
  name: "CurrentUserView",
  data() {
    return {
      placeholderImage,
      personImage,
      shelves: [] as Shelf[],
      user: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    DataService.instance.getCurrentUser().then(data => {
      next((vm: any) => vm.setData(data));
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.user = {};
    this.shelves = [];
    DataService.instance.getCurrentUser().then(data => {
      if (data) {
        this.setData(data)
      }
      next()
    })
  },
  methods: {
    setData(data: FullUserResponse): void {
      this.user = data.user;
      this.shelves = data.shelves;
      this.$store.commit(Mutation.SetCurrentUser, data.user)
    }
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
