<template>
  <div :class="`component{ component--{name}`">
    <section class="container section section--login">
      <Form class="form form--login"
            data-url="/api/user/login"
      >

        <h1 class="form__header">
          {{ $t('user.login') }}
        </h1>

        <FieldInput field-name="login"
                    :label="$t('user.email')"
                    type="text"
                    data-validate="required length"
        />

        <FieldInput field-name="password"
                    data-validate="required"
                    type="password"
                    :label="$t('user.password')"
        />
        <FieldSubmit :label="$t('user.login')"/>
      </Form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import Form from "@/components/form/Form.vue";


export default Vue.extend({
  name: "UserLoginView",

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
