<template>
  <div :class="`component{ component--{name}`">
    <section class="container section section--register">
      <form class="form form--register"
            data-url="/user/register"
      >
        <h1 class="form__header">
          {{ $t('user.register') }}
        </h1>

        <FieldInput field-name="email"
                    :label="$t('user.email')"
                    type="text"
                    data-validate="required length email"
        />

        <FieldInput field-name="username"
                    :label="$t('user.username')"
                    type="text"
                    data-validate="required length"
        />

        <FieldInput field-name="password"
                    :label="$t('user.password')"
                    type="password"
                    data-validate="required"
        />

        <FieldInput field-name="repeatPassword"
                    :label="$t('user.repeatPassword')"
                    type="password"
                    data-validate="required equals=password"
        />

        <FieldSubmit :label="$t('user.register')"/>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import FieldInput from "@/components/form/FieldInput.vue";


export default Vue.extend({
  name: "UserRegisterView",

  components: {
    FieldInput,
    FieldSubmit,
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
