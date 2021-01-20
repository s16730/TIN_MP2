<template>
  <div :class="`component{ component--{name}`">
    <section class="section section--author">
      <!--      <% if (message) { %>-->
      <!--      <span>-->
      <!--            <%= message %>-->
      <!--        </span>-->
      <!--      <% } %>-->

      <form class="form form--shelf"
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
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FieldInput from "@/components/form/FieldInput.vue";
import FieldSubmit from "@/components/form/FieldSubmit.vue";
import FieldTextarea from "@/components/form/FieldTextarea.vue";
import { DataService } from "@/services/DataService";
import { Shelf } from "@/types";


export default Vue.extend({
  name: "EditShelfView",
  data() {
    return {
      formData: {} as Shelf
    }
  },
  mounted() {
    Vue.nextTick(() => {
      if (this.$route.params.id) {
        DataService.instance.getShelf(this.$route.params.id).then(data => {
          this.formData = data.shelf;
        });
      }
    })
  },
  computed: {
    dataUrl(): string {
      return this.formData ? `/shelf/${this.formData.id}/edit` : `/shelf/add`;
    }
  },
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
