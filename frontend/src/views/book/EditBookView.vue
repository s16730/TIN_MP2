<template>
  <div :class="`component{ component--{name}`">
    <section class="section section--book">
      <!--      <% if (message) { %>-->
      <!--      <span>-->
      <!--            <%= message %>-->
      <!--        </span>-->
      <!--      <% } %>-->
      <form class="form form--book"
            :data-url="dataUrl"
      >
        <h1>
          <template v-if="data">
            {{ $t('book.editBook') }}
          </template>
          <template v-else>
            {{ $t('book.addBook') }}
          </template>
        </h1>
        <div class="container book book--full book--edit">
          <div class="book__cover">
            <img :src="placeholderImage"
                 :alt="$t('book.cover')"
            >
          </div>

          <div class="book__info">
            <FieldInput field-name="title"
                        :label="$t('book.title')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.title : ''"
            />

            <FieldInput field-name="publicationDate"
                        :label="$t('book.publicationDate')"
                        type="date"
                        data-validate="required length"
                        :default-value="data ? data.publicationDate : ''"
            />


            <FieldAutocomplete field-name="authors"
                               :label="$t('book.author')"
                               data-validate="required length"
                               :default-value="authorDefaultValue"
            />

            <FieldInput field-name="isbn"
                        :label="$t('book.isbn')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.isbn : ''"
            />

            <FieldTextarea field-name="description"
                           :label="$t('book.description')"
                           data-validate="required length"
                           :default-value="data ? data.description : ''"
            />

            <FieldSubmit :label="$t('save')"/>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import FieldTextarea from "@/components/form/FieldTextarea.vue";
import FieldAutocomplete from "@/components/form/FieldAutocomplete.vue";
import placeholderImage from "@/assets/960x960.png";
import { DataService } from "@/services/DataService";
import { Book } from "@/types";


export default Vue.extend({
  name: "EditBookView",
  data() {
    return {
      placeholderImage,
      data: {} as Book,
    }
  },
  mounted() {
    Vue.nextTick(() => {
      if (this.$route.params.id) {
        DataService.instance.getBook(this.$route.params.id).then(data => {
          this.data = data.book;
        });
      }
    })
  },
  computed: {
    authorDefaultValue(): string {
      let authorString = "";
      if (this.data.authors) {
        this.data.authors.forEach(author => authorString += `${author.name} ${author.surname}, `);
      }

      return authorString;
    },
    dataUrl(): string {
      return this.data ? `/book/${this.data.id}/edit` : `/book/add`;
    }
  },
  components: {
    FieldInput,
    FieldAutocomplete,
    FieldSubmit,
    FieldTextarea,
  },
});
</script>

<style scoped
       lang="scss"
>

</style>
