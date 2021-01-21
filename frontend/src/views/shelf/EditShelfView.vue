<template>
  <div :class="`component{ component--{name}`"
       :key="data.id"
  >
    <section class="section section--author">
      <!--      <% if (message) { %>-->
      <!--      <span>-->
      <!--            <%= message %>-->
      <!--        </span>-->
      <!--      <% } %>-->

      <Form class="form--shelf"
            :data-url="dataUrl"
      >
        <h1>
          <template v-if="data">
            {{ $t('shelf.edit') }}
          </template>
          <template v-else>
            {{ $t('shelf.add') }}
          </template>
        </h1>
        <div class="container shelf shelf--full">
          <div class="shelf__info">
            <FieldInput field-name="name"
                        :label="$t('shelf.name')"
                        type="text"
                        data-validate="required length"
                        :default-value="data ? data.name : ''"
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
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import FieldTextarea from "@/components/form/FieldTextarea.vue";
import { DataService } from "@/services/DataService";
import { BookResponse, Shelf, ShelfResponse } from "@/types";
import Form from "@/components/form/Form.vue";


export default Vue.extend({
  name: "EditShelfView",
  data() {
    return {
      formData: {} as Shelf
    }
  },
  beforeRouteEnter(to, from, next) {
    DataService.instance.getShelf(to.params.id).then(data => {
      next((vm: any) => vm.setData(data));
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.formData = {} as Shelf;

    DataService.instance.getShelf(to.params.id).then(data => {
      this.setData(data)
      next()
    })
  },
  methods: {
    setData(data: ShelfResponse): void {
      this.formData = data.shelf;
    }
  },


  computed: {
    dataUrl(): string {
      return this.formData ? `/api/shelf/${this.formData.id}/edit` : `/api/shelf/add`;
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
