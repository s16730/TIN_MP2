<template>
  <div :class="`component{ component--{name}`">
    <section class="container section section--register">
      <form class="form form--register"
            data-url="/user/changePassword"
      >
        <h1 class="form__header">
          {{ $t('user.changePassword') }}
        </h1>

        <FieldInput field-name="currentPassword"
                    :label="$t('user.currentPassword')"
                    type="currentPassword"
                    data-validate="required"
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

        <FieldSubmit :label="$t('user.changePassword')"/>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import FieldInput from "@/components/form/FieldInput.vue";

export default Vue.extend({
  name: "UserChangePassword",
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
