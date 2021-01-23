<template>
  <div :class="`component--{name}`"
       :key="data.id"
  >
    <section class="section section--author">
      <!--      <% if (message) { %>-->
      <!--      <span>-->
      <!--            <%= message %>-->
      <!--        </span>-->
      <!--      <% } %>-->
      <Form class="form"
            :data-url="dataUrl"
      >
        <h1 class="visually-hidden">
          {{ $t('author.add') }}
          {{ $t('author.edit') }}
        </h1>
        <div class="container author author--full">
          <div class="author__photo">
            <img :src="authorImg"
                 :alt="'' || data.name"
            >
          </div>
          <div class="author__info">
            <FieldInput field-name="name"
                        :label="$t('author.name')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.name : ''"
            />
            <FieldInput field-name="surname"
                        :label="$t('author.surname')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.surname : ''"
            />
          </div>
          <div class="author__description">
            <FieldTextarea field-name="bio"
                           :label="$t('author.bio')"
                           :default-value="data ? data.bio : ''"
            />
          </div>
          <FieldSubmit :label="$t('save')"/>
        </div>
      </Form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldTextarea from "@/components/form/FieldTextarea.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import image from "@/assets/960x960.png";
import { DataService } from "@/services/DataService";
import { Author, AuthorResponse, BookResponse } from "@/types";
import Form from "@/components/form/Form.vue";

export default Vue.extend({
  name: "EditAuthorView",
  data() {
    return {
      authorImg: image,
      data: {} as Author,
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      DataService.instance.getAuthor(to.params.id).then(data => {
        next((vm: any) => vm.setData(data));
      });
    } else {
      next()
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.data = {} as Author;

    if (to.params.id) {
      DataService.instance.getAuthor(to.params.id).then(data => {
        this.setData(data)
        next()
      })
    } else {
      next()
    }
  },
  methods: {
    setData(data: AuthorResponse): void {
      this.data = data.author;
    },
  },
  computed: {
    dataUrl(): string {
      return this.data && this.data.id ? `/api/author/${this.data.id}/edit` : `/api/author/add`;
    }
  },
  components: {
    FieldInput,
    FieldSubmit,
    FieldTextarea,
    Form,
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
