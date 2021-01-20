<template>
  <div id="app">
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

        <div class="account account--logged-out">
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
      </div>
      <div class="header__menu">
        <nav class="header__menu__list container">
          <router-link class="header__menu__list__item"
                       to="/"
          >
            {{ $t('Home') }}
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

export default Vue.extend({
  name: "App",
  data() {
    return {
      logoImg,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
