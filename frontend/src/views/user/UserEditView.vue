<template>
  <div :class="`component{ component--{name}`">
    <section class="container section section--register">
      <Form class="form--register"
            :data-url="`/api/user/${user.id}/edit`"
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
      </Form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import Form from "@/components/form/Form.vue";
import { DataService } from "@/services/DataService";
import { BookResponse, User, UserResponse } from "@/types";


export default Vue.extend({
  name: "UserEditView",
  data() {
    return {
      user: {} as User,
    }
  },
  beforeRouteEnter(to, from, next) {
    DataService.instance.getUser(to.params.id).then(data => {
      next((vm: any) => vm.setData(data));
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.user = {} as User;

    DataService.instance.getUser(to.params.id).then(data => {
      this.setData(data)
      next()
    })
  },
  methods: {
    setData(data: UserResponse): void {
      this.user = data.user;
    }
  },
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
