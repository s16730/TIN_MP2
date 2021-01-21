<template>
  <div :class="`component{ component--{name}`">
    <section class="container section section--register">
      <Form class="form form--register"
            data-url="/api/user/register"
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
      </Form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import FieldInput from "@/components/form/FieldInput.vue";
import Form from "@/components/form/Form.vue";


export default Vue.extend({
  name: "UserRegisterView",

  components: {
    FieldInput,
    FieldSubmit,
    Form,
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
