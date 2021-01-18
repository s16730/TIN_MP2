<template>
  <div :class="`component component--${name}`">
    <section class="container section section--register">
      <form class="form form--register"
            data-url="/user/register"
      >
        <h1 class="form__header">
          {{ $t('user.edit') }}
        </h1>

        <FieldInput field-name="email"
                    :label="$t('user.email')"
                    type="text"
                    data-validate="required length email"
                    :default-value="user.email"
        />

        <FieldInput field-name="username"
                    :label="$t('user.username')"
                    type="text"
                    data-validate="required length"
                    :default-value="user.username"
        />

        <FieldSubmit :label="$t('save')"/>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";


export default Vue.extend({
  name: "UserEditView",
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
