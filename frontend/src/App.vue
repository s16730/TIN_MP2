<template>
  <div id="app">
    <GlobalMessage/>
    <header class="header">
      <div class="header__top-bar container">
        <div class="brand">
          <img :src="logoImg"
               :alt="$t('Logo')"
               class="brand__logo"
          />
          <span class="brand__name fc-white fw-700">
        {{ $t("Library") }}
      </span>
        </div>

        <div class="account account--logged-out"
             v-if="!currentUser"
        >
          <router-link class="account__button button"
                       to="/user/register"
          >
            {{ $t('Register') }}
          </router-link>
          <router-link class="account__button button"
                       to="/user/login"
          >
            {{ $t('Login') }}
          </router-link>
        </div>
        <div v-else>
          <router-link :to="`/user/${currentUser.id}`">
            {{ currentUser.username }}
          </router-link>
          <button @click="logout">
            Wyloguj
          </button>
        </div>
      </div>
      <div class="header__menu">
        <nav class="header__menu__list container">
          <router-link class="header__menu__list__item"
                       to="/"
          >
            {{ $t('Home') }}
          </router-link>
          <router-link class="header__menu__list__item"
                       v-if="$store.state.currentUser.hasContentEditPermission"
                       :to="`/author/add`"
          >
            {{ $t('author.add') }}
          </router-link>
          <router-link class="header__menu__list__item"
                       v-if="$store.state.currentUser.hasContentEditPermission"
                       :to="`/book/add`"
          >
            {{ $t('book.add') }}
          </router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view/>
    </main>

    <footer class="footer">
      <span>
        Bartłomiej Mazurowski, s16730
      </span>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logoImg from "@/assets/960x960.png"
import GlobalMessage from "@/components/form/GlobalMessage.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "App",
  data() {
    return {
      logoImg,
    };
  },
  created() {
    this.$store.dispatch('init')
  },
  computed: {
    ...mapState({
      currentUser(): boolean {
        return this.$store.state.currentUser;
      },
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  components: {
    GlobalMessage,
  }
});
</script>

<style lang="scss">

</style>
